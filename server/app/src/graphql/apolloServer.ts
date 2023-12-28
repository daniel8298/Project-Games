import { server } from "../server";

export const connectToApolloServer = async () => {
  try {
    await server.start();
    return "Successfully Connected To ApolloServer!";
  } catch (error) {
    if (error instanceof Error) return console.log(error.message);
  }
};
