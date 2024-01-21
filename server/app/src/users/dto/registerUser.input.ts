import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';

@InputType()
export class RegisterUser {
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  @Field()
  firstName: string;

  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  @Field()
  lastName: string;

  @Matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, {
    message: 'Invalid email address format',
  })
  @Field()
  email: string;

  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,20})/, {
    message:
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one special character.',
  })
  @Field()
  password: string;

  @Field({ nullable: true })
  isAdmin: boolean;
}
