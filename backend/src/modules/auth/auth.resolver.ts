import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SingInArgs, SingUpArgs, RefreshArgs } from './dto/auth.args';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt.guard';
import { RefreshToken, UserModel, UserTokensModel } from '../users/users.model';
import { GraphQLError } from 'graphql';
@Resolver('auth')
export class AuthResolver {
  constructor(private readonly service: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => UserModel)
  public async getAuthUser(@Context() context): Promise<UserModel | GraphQLError> {
    return await this.service.getUser(context.req.user.email);
  }

  @Query(() => UserTokensModel)
  public async refresh(@Args() args: RefreshArgs): Promise<RefreshToken | GraphQLError> {
    return await this.service.refreshToken(args);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => String)
  public async logout(@Context() { req: { user } }): Promise<String | GraphQLError> {
    return await this.service.logout(user);
  }

  @Mutation(() => UserTokensModel)
  public async SingIn(@Args() args: SingInArgs): Promise<UserTokensModel | GraphQLError> {
    return await this.service.login(args);
  }

  @Mutation(() => UserTokensModel)
  public async SingUp(@Args() args: SingUpArgs): Promise<UserTokensModel | GraphQLError> {
    return await this.service.registration(args);
  }
}
