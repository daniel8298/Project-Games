import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  buttonTrue: number;
}

const initialState: InitialState = {
  buttonTrue: 0,
};

export const exchangeGamesSlice = createSlice({
  name: "exchangeGames",
  initialState,
  reducers: {
    countGames(state, action: PayloadAction<{ game: number }>) {
      state.buttonTrue += action.payload.game;
    },
  },
});

export const { countGames } = exchangeGamesSlice.actions;
export default exchangeGamesSlice.reducer;
