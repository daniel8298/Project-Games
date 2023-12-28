import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  MUTATIONS_USER_SIGNIN,
  MUTATIONS_USER_SIGNUP,
} from "../../../services/apollo/mutations";
import client from "../../../apollo/apolloApi";

export interface loginUser {
  email: string;
  password: string;
}

export interface SignUpUser {
  email: string;
  password: string;
  isAdmin: boolean;
}

export const SignInRequest = createAsyncThunk(
  "user/SignInRequest",
  async (userFromClient: loginUser, apiThunk) => {
    try {
      const { data } = await client.mutate({
        mutation: MUTATIONS_USER_SIGNIN,
        variables: { input: userFromClient },
      });

      return data.SignInUser;
    } catch (error) {
      return apiThunk.rejectWithValue(error);
    }
  }
);

export const SignUpRequest = createAsyncThunk(
  "user/SignUpRequest",
  async (userFromClient: SignUpUser, apiThunk) => {
    try {
      const { data } = await client.mutate({
        mutation: MUTATIONS_USER_SIGNUP,
        variables: { input: userFromClient },
      });
      console.log("Successfully Signed Up!");
      return data.signUpUser;
    } catch (error) {
      console.error("Error Signing Up:", error);
      return apiThunk.rejectWithValue(error);
    }
  }
);
