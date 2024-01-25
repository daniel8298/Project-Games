import { createAsyncThunk } from "@reduxjs/toolkit";
import { MUTATIONS_USER_SIGNIN } from "../../../services/apollo/mutations";
import client from "../../../apollo/apolloApi";

export interface loginUser {
  email: string;
  password: string;
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
      // throw error;
    }
  }
);
