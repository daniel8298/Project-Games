import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, SerializedError } from "@reduxjs/toolkit";
import getGame from "./services/getGame";
import GameInterface from "./interfaces/GameInterface";
import getAllGames from "./services/getAllGames";

interface InitialState {
  productsBySale: number[];
  pending: boolean;
  error: string | SerializedError;
  games: GameInterface[];
  game: GameInterface | null;
}

const initialState: InitialState = {
  productsBySale: [],
  pending: false,
  error: "",
  games: [],
  game: null,
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setBySale: (state, action: PayloadAction<number[]>) => {
      state.productsBySale = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllGames.pending, (state) => {
      state.pending = true;
      return state;
    });
    builder.addCase(getAllGames.fulfilled, (state, action) => {
      state.pending = false;
      state.games = action.payload;
      return state;
    });
    builder.addCase(getAllGames.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
      return state;
    });
    builder.addCase(getGame.pending, (state) => {
      state.pending = true;
      return state;
    });
    builder.addCase(getGame.fulfilled, (state, action) => {
      state.pending = false;
      state.game = action.payload;
      return state;
    });
    builder.addCase(getGame.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
      return state;
    });
  },
});

export const { setBySale } = gamesSlice.actions;
export default gamesSlice.reducer;
