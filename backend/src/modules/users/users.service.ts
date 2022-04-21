import { Injectable } from '@nestjs/common';
import { UsersEntity } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity) private users: Repository<UsersEntity>
  ) {}

  async findOne(email: string) {
    return this.users.findOne({ email });
  }

  async findAll() {}

  async create(user): Promise<any> {
    return await this.users.save(user);
  }

  async edit(user) {}

  async delete(id: number) {}
}
