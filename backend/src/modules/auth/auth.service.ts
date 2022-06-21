import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SessionEntity } from './session.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly users: UsersService,
    private readonly jwt: JwtService,
    @InjectRepository(SessionEntity)
    private readonly session: Repository<SessionEntity>,
  ) {}

  public async login({ email, password }) {
    const user = await this.getUser(email);
    const validPassword = await this.verificationPassword(
      password,
      user.password,
    );
    if (!validPassword)
      throw new BadRequestException('Возможно неверный логин или пароль');

    const { access_token } = await this.setAccessToken(user.email);
    const { refresh_token } = await this.setRefreshToken(user.email);

    return { ...user, access_token, refresh_token };
  }

  public async getUser(email: string) {
    return await this.users.findOne(email);
  }

  public async registration(user) {
    user.password = await this.hashPassword(user.password);

    const person = await this.users.create(user);
    const { access_token } = await this.setAccessToken(person.email);
    const { refresh_token } = await this.setRefreshToken(person.email);

    return { ...person, access_token, refresh_token };
  }

  async setSession({ refresh_token, email }) {
    const session = await this.session.findOne({ email });
    if (session) {
      return await this.session.update(session.id, { refresh_token });
    } else {
      return await this.session.save({ refresh_token, email });
    }
  }

  public async refreshToken({ refresh_token }) {
    const session = await this.session.findOne({ refresh_token });
    if (session) {
      const { access_token } = await this.setAccessToken(session.email);
      const { refresh_token } = await this.setRefreshToken(session.email);
      await this.setSession({ email: session.email, refresh_token });
      return { access_token, email: session.email, refresh_token };
    } else throw new BadRequestException('Ошибка, авторизуйтеcь повторно');
  }

  public async logout({ email }) {
    await this.session.delete({ email });
    return 'logout';
  }

  private async setAccessToken(email: string) {
    const access_token = this.jwt.sign(
      { email },
      { secret: process.env.ACCESS_TOKEN_KEY },
    );
    return { access_token };
  }

  private async setRefreshToken(email: string) {
    const refresh_token = this.jwt.sign(
      { email },
      { secret: process.env.REFRESH_TOKEN_KEY },
    );
    await this.setSession({ refresh_token, email });
    return { refresh_token };
  }

  private async verificationPassword(password: string, hash) {
    return await bcrypt.compare(password, hash);
  }

  private async hashPassword(password: string) {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }
}
