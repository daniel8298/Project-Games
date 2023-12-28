import express from "express";
import chalk from "chalk";
import cors from "./cors/cors";
import handleErrorMiddleware from "./middlewares/handleErrorMiddleware";
import { expressMiddleware } from "@apollo/server/express4";
import { connectToMongoose } from "./dataAccess/mongoose";
import { connectToRedis } from "./redis/redis";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import BodyParser from "body-parser";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { useServer } from "graphql-ws/lib/use/ws";
import { ApolloServer } from "@apollo/server";
import apolloLogger from "./graphql/logger/apolloLogger";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import { connectToApolloServer } from "./graphql/apolloServer";
import { insertGamesIntoMongoose } from "./games/dal/gamesDal";
import { connectionToPostgres } from "./dataAccess/postgreSQL";
import { insertUsersFromJSONIntoPG } from "./users/dal/usersDal";

export const app = express();
const httpServer = createServer(app);
const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});
const schema = makeExecutableSchema({ typeDefs, resolvers });
const serverCleanup = useServer({ schema }, wsServer);
export const server = new ApolloServer({
  schema,
  plugins: [
    apolloLogger,
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

app.use(express.json());
app.use(cors);
app.use(handleErrorMiddleware);

const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  console.log(chalk.blueBright(`Server listening on port: ${PORT}`));

  connectToApolloServer()
    .then(async (message) => {
      app.use("/graphql", cors, BodyParser.json(), expressMiddleware(server));

      httpServer.listen(5000, () => {
        console.log(chalk.cyanBright(`http://localhost:5000/graphql`));
      });
      console.log(chalk.yellowBright(message));
    })
    .catch((error) =>
      console.log(chalk.redBright("Connect to Apollo Error: ", error.message))
    );

  connectToRedis()
    .then((data) => console.log(chalk.blue(data)))
    .catch((error) =>
      console.log(chalk.redBright("Connect to Redis Error: ", error.message))
    );

  connectToMongoose()
    .then(async (message) => {
      insertGamesIntoMongoose();
      console.log(chalk.greenBright(message));
    })
    .catch((error) =>
      console.log(chalk.redBright("Connect to MongoDB Error: ", error.message))
    );

  connectionToPostgres()
    .then(async (message) => {
      insertUsersFromJSONIntoPG();
      console.log(chalk.magentaBright(message));
    })
    .catch((error) =>
      console.log(chalk.redBright("Connect to Postgres Error: ", error.message))
    );
});
