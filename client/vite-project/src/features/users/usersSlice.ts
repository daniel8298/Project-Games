import { createSlice } from "@reduxjs/toolkit";
import type { SerializedError } from "@reduxjs/toolkit";
import {
  getToken,
  getUser,
  logedInUser,
  setItem,
} from "../users/services/localStorageService";
import { SignInRequest, SignUpRequest } from "../users/services/usersRequests";

interface InitialState {
  user: logedInUser | null;
  pending: boolean;
  error: string | SerializedError;
  token: string | null;
}

const initialState: InitialState = {
  user: getUser(),
  pending: false,
  token: getToken(),
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(SignInRequest.pending, (state) => {
      state.pending = true;
      return state;
    });
    builder.addCase(SignInRequest.fulfilled, (state, { payload }) => {
      state.pending = false;
      setItem("token", payload.SignInUser.token);
      state.user = getUser();
      state.token = getToken();
      return state;
    }),
      builder.addCase(SignInRequest.rejected, (state, { error }) => {
        state.pending = false;
        state.error = error;
        return state;
      });
    builder.addCase(SignUpRequest.pending, (state) => {
      state.pending = true;
      return state;
    });
    builder.addCase(SignUpRequest.fulfilled, (state, action) => {
      state.pending = false;
      state.user = action.payload;
      return state;
    });
    builder.addCase(SignUpRequest.rejected, (state, { error }) => {
      state.pending = false;
      state.error = error;
      return state;
    });
  },
});

export default userSlice.reducer;
