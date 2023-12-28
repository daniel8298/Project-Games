import {
  gamesMutations,
  gamesQueries,
} from "../games/resolvers/gamesResolvers";
import {
  usersMutations,
  usersQueries,
  usersSubscriptions,
} from "../users/resolvers/usersResolvers";

const resolvers = {
  Query: {
    ...gamesQueries,
    ...usersQueries,
  },
  Mutation: {
    ...usersMutations,
    ...gamesMutations,
  },
  Subscription: {
    ...usersSubscriptions,
  },
};

export default resolvers;
