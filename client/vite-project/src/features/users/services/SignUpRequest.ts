import { createAsyncThunk } from "@reduxjs/toolkit";
import { MUTATIONS_USER_SIGNUP } from "../../../services/apollo/mutations";
import client from "../../../apollo/apolloApi";

export interface SignUpUser {
  email: string;
  password: string;
}

export const SignUpRequest = createAsyncThunk(
  "user/SignUpRequest",
  async (userFromClient: SignUpUser) => {
    try {
      const { data } = await client.mutate({
        mutation: MUTATIONS_USER_SIGNUP,
        variables: { input: userFromClient },
      });
      console.log("Successfully Signed Up!");

      return data.signUpUser;
    } catch (error) {
      console.error("Error Signing Up:");
      // return apiThunk.rejectWithValue(error);
      throw error;
    }
  }
);
