import { createAsyncThunk } from "@reduxjs/toolkit";
import { QUERY_GAMES } from "../../../services/apollo/queries";
import client from "../../../apollo/apolloApi";

const getAllGames = createAsyncThunk("games/getAllGames", async () => {
  try {
    const { data } = await client.query({ query: QUERY_GAMES });
    console.log("Success");
    return data.games;
  } catch (error) {
    console.error("Error connecting to the games server");
    throw error;
  }
});

export default getAllGames;
