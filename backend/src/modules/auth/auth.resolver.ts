import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SingInArgs, SingUpArgs, RefreshArgs } from './dto/auth.args';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt.guard';
import { UserModel, UserTokensModel } from '../users/users.model';

@Resolver('auth')
export class AuthResolver {
  constructor(private readonly service: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => UserModel)
  public async getAuthUser(@Context() context) {
    return await this.service.getUser(context.req.user.email);
  }

  @Query(() => UserTokensModel)
  public async refresh(@Args() args: RefreshArgs, @Context() { req }) {
    return await this.service.refreshToken(req, args);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => String)
  public async logout(@Context() context) {
    const { user } = context.req;
    return await this.service.logout(user);
  }

  @Mutation(() => UserTokensModel)
  public async SingIn(@Args() args: SingInArgs, @Context() context) {
    return await this.service.login(args, context.req.res);
  }

  @Mutation(() => UserModel)
  public async SingUp(@Args() args: SingUpArgs) {
    return await this.service.registration(args);
  }
}
