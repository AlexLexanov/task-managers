import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Return user model' })
export class UserModel {
  @Field()
  public email: string;

  @Field()
  public lastname: string;

  @Field()
  public firstname: string;
}

@ObjectType({ description: 'Return token and refresh token' })
export class UserTokensModel extends UserModel {
  @Field()
  public access_token: string;

  @Field()
  public refresh_token: string;
}
