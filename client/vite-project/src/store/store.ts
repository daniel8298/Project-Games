import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users/usersSlice";
import themeModeSlice from "../features/global/themes/themeModeSlice";
import axiosInterceptors from "./middlewares/axiosInterceptors";
import tokenSlice from "../features/global/token/tokenSlice";
import gamesSlice from "../features/games/gamesSlice";

export const store = configureStore({
  reducer: {
    games: gamesSlice,
    users: usersSlice,
    themeMode: themeModeSlice,
    token: tokenSlice,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      axiosInterceptors
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
