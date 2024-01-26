import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GameInputAddress {
  @Field()
  areaCountry: String;
  @Field()
  city: String;
  @Field()
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
export class GameInputCreate {
  @Field()
  name: string;
  @Field()
  genre: String;
  @Field()
  platforms: Platform;
  @Field()
  description: String;
  @Field()
  contactNumber: String;
  @Field()
  imageUrl: String;
  @Field()
  imageAlt: String;
  @Field()
  address: GameInputAddress;
}
