import { createAsyncThunk } from "@reduxjs/toolkit";
import { QUERY_GAMES_BY_USERID } from "../../../services/apollo/queries";
import client from "../../../apollo/apolloApi";

const getGamesByAnotherUserId = createAsyncThunk(
  "gamesFromUser/getGamesByAnotherUserId",
  async (userId: string) => {
    try {
      const { data } = await client.query({
        query: QUERY_GAMES_BY_USERID,
        variables: {
          gamesByUserIdId: userId,
        },
      });

      return data.gamesByUserId;
    } catch (error) {
      console.error("Error connecting to the game server");
      throw error;
    }
  }
);

export default getGamesByAnotherUserId;
