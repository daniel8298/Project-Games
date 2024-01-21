import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type GameDocument = HydratedDocument<Game>;

@Schema()
export class Address {
  @Prop({ required: true })
  areaCountry: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  street: string;
}

@Schema()
export class Game {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  genre: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  contactNumber: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  imageAlt: string;

  @Prop({ type: Date, default: Date.now })
  dateGame: Date;

  @Prop({
    required: true,
    enum: ['PC', 'PS4', 'PS5', 'XBOX SERIES', 'XBOX ONE', 'NINTENDO SWITCH'],
  })
  platforms: string;

  @Prop({ required: true })
  address: Address;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  email: string;
}

export const GameSchema = SchemaFactory.createForClass(Game);

// { enum: ['PC', 'PS4', 'PS5'] }

// import mongoose from 'mongoose';

// const GameSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   genre: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   contactNumber: {
//     type: String,
//     required: true,
//   },
//   imageUrl: {
//     type: String,
//     required: true,
//   },
//   imageAlt: {
//     type: String,
//     required: true,
//   },
//   dateGame: {
//     type: Date,
//     default: Date.now,
//   },
//   platforms: {
//     type: { enum: ['PC', 'PS4', 'PS5'] },
//     required: true,
//   },
//   userId: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
// });

// export default GameSchema;
