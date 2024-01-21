import { SerializedError, createSlice } from "@reduxjs/toolkit";
import GameInterface from "../games/interfaces/GameInterface";
import getGamesByUserId from "./services/getGamesByUserId";
import getGamesByAnotherUserId from "./services/getGamesByAnotherUserId";


interface InitialState {
  pending: boolean;
  error: string | SerializedError;
  gamesFromUser: GameInterface[];
  gamesFromAnotherUser: GameInterface[];
}

const initialState: InitialState = {
  pending: false,
  error: "",
  gamesFromUser: [],
  gamesFromAnotherUser: [],
};

export const exchangeGamesSlice = createSlice({
  name: "gamesFromUser",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getGamesByUserId.pending, (state) => {
      state.pending = true;
      return state;
    });
    builder.addCase(getGamesByUserId.fulfilled, (state, action) => {
      state.pending = false;
      state.gamesFromUser = action.payload;
      return state;
    });
    builder.addCase(getGamesByUserId.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
      return state;
    });
    builder.addCase(getGamesByAnotherUserId.pending, (state) => {
      state.pending = true;
      return state;
    });
    builder.addCase(getGamesByAnotherUserId.fulfilled, (state, action) => {
      state.pending = false;
      state.gamesFromAnotherUser = action.payload;
      return state;
    });
    builder.addCase(getGamesByAnotherUserId.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
      return state;
    });
  },
});

export default exchangeGamesSlice.reducer;
