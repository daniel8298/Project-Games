import { createAsyncThunk } from "@reduxjs/toolkit";
import { QUERY_GAME } from "../../../services/apollo/queries";
import client from "../../../apollo/apolloApi";

const getGame = createAsyncThunk("games/getGame", async (gameId: string) => {
  try {
    const { data } = await client.query({
      query: QUERY_GAME,
      variables: {
        getGameId: gameId,
      },
    });
    console.log("Success");
    return data.getGame;
  } catch (error) {
    console.error("Error connecting to the game server");
    throw error;
  }
});

export default getGame;
