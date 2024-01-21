import { createAsyncThunk } from "@reduxjs/toolkit";
import { QUERY_GAMES_BY_USERID } from "../../../services/apollo/queries";
import client from "../../../apollo/apolloApi";

const getGamesByUserId = createAsyncThunk(
  "gamesFromUser/getGamesByUserId",
  async (userId: string) => {
    try {
      const { data } = await client.query({
        query: QUERY_GAMES_BY_USERID,
        variables: {
          gamesByUserIdId: userId,
        },
      });
      console.log("Success");
      return data.gamesByUserId;
    } catch (error) {
      console.error("Error connecting to the game server");
      throw error;
    }
  }
);

export default getGamesByUserId;
