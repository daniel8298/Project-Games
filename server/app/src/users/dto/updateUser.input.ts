import { Field, InputType } from '@nestjs/graphql';
import { Matches, MaxLength, MinLength } from 'class-validator';

@InputType()
export class UpdateUser {
  @MinLength(2)
  @MaxLength(20)
  @Field({ nullable: true })
  firstName: string;

  @MinLength(2)
  @MaxLength(20)
  @Field({ nullable: true })
  lastName: string;

  @Matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, {
    message: 'Invalid email address format',
  })
  @Field({ nullable: true })
  email: string;

  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,20})/, {
    message:
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one special character.',
  })
  @Field({ nullable: true })
  password: string;
}
