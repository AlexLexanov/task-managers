import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { RefreshArgs, SignInArgs } from './dto/auth.args';
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
  public async SignIn(@Args() args: SignInArgs, @Context() context) {
    return await this.service.login(args, context.req.res);
  }

  @Mutation(() => UserModel)
  public async SignUp(@Args() args: SignInArgs) {
    return await this.service.registration(args);
  }
}
