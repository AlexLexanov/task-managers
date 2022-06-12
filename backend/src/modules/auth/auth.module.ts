import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtConfigService } from '../../config';

import { AuthService } from './auth.service';
import { SessionEntity } from './session.entity';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from '../users/users.module';
import { ApolloStrategy } from './strategy/apollo.strategy';
@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([SessionEntity]),
    JwtModule.registerAsync({ useClass: JwtConfigService }),
  ],
  providers: [AuthService, ApolloStrategy, AuthResolver],
})
export class AuthModule {}
