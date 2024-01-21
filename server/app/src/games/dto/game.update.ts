import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GameUpdateAddress {
  @Field({ nullable: true })
  areaCountry: String;
  @Field({ nullable: true })
  city: String;
  @Field({ nullable: true })
  street: String;
}

type Platform =
  | 'PC'
  | 'PS5'
  | 'PS4'
  | 'XBOX SERIES'
  | 'XBOX ONE'
  | 'NINTENDO SWITCH';

@InputType()
export class GameInputUpdate {
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  genre: String;
  @Field({ nullable: true })
  platforms: Platform;
  @Field({ nullable: true })
  description: String;
  @Field({ nullable: true })
  contactNumber: String;
  @Field({ nullable: true })
  imageUrl: String;
  @Field({ nullable: true })
  imageAlt: String;
  @Field({ nullable: true })
  address: GameUpdateAddress;
}
