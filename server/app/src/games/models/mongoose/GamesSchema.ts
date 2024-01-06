import mongoose, { Schema } from "mongoose";

export const GamesSchema = new Schema({
  name: String,
  genre: String,
  platforms: String,
  description: String,
  dateGame: { type: Date, default: Date.now },
  contactNumber: String,
  imageUrl: String,
  imageAlt: String,
  address: {
    areaCountry: String,
    city: String,
    street: String,
  },
  userId: String,
  email: String,
});

export const Game = mongoose.model("game", GamesSchema);
