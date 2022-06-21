import { ArgsType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@ArgsType()
export class SignInArgs {
  @Field(() => String)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  password: string;
}

@ArgsType()
export class SignUpArgs extends SignInArgs {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  lastname: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  firstname: string;
}

@ArgsType()
export class RefreshArgs {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  refresh_token: string;
}
