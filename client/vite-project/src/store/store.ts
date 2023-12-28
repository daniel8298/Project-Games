import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users/usersSlice";
// import cartSlice from "../features/cart/cartSlice";
import themeModeSlice from "../features/themes/themeModeSlice";
import axiosInterceptors from "./services/axiosInterceptors";
import tokenSlice from "../features/token/tokenSlice";
import gamesSlice from "../features/games/gamesSlice";
// import orderSlice from "../order/orderSlice";

export const store = configureStore({
  reducer: {
    games: gamesSlice,
    // order: orderSlice,
    users: usersSlice,
    // cart: cartSlice,
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
