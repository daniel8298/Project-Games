import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GameAddress {
  @Field()
  areaCountry: String;
  @Field()
  city: String;
  @Field()
  street: String;
}

@ObjectType()
export class GameType {
  @Field(() => ID)
  _id: String;
  @Field()
  name: String;
  @Field()
  genre: String;
  @Field()
  platforms: String;
  @Field()
  description: String;
  @Field()
  contactNumber: String;
  @Field()
  imageUrl: String;
  @Field()
  dateGame: String;
  @Field()
  imageAlt: String;
  @Field()
  address: GameAddress;
  @Field()
  userId: String;
  @Field()
  email: String;
}

@ObjectType()
export class MessageType {
  @Field()
  massage: string;
}
