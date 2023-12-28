import {
  usersTypeDefsMutations,
  usersTypeDefsQueries,
  usersTypeDefs,
  usersTypeDefsSubscriptions,
} from "../users/typeDefs/userTypeDefs";
import {
  gamesTypeDefsMutations,
  gamesTypeDefsQueries,
  gameTypesDefs,
} from "../games/typeDefs/gamesTypeDefs";

const typeDefs = `#graphql   
    ${gameTypesDefs}
    ${usersTypeDefs}
  
  type Query{
    ${gamesTypeDefsQueries}
    ${usersTypeDefsQueries}
  } 
  type Mutation{
    ${usersTypeDefsMutations}
    ${gamesTypeDefsMutations}
  }
  type Subscription {
    ${usersTypeDefsSubscriptions}
  }
`;

export default typeDefs;
