export const gameTypesDefs = `
scalar Date

  type Address {
    areaCountry: String
    city: String
    street: String
  }

  type Game {
    _id: ID
    name: String
    genre: String
    platforms: String
    description: String
    contactNumber: String
    imageUrl: String
    imageAlt: String
    dateGame: Date
    address: Address
  }

  input EditGameInput {
    name: String
    genre: String
    platforms: String
    description: String
    contactNumber: String
    imageUrl: String
    imageAlt: String
    address: AddressInput
  }
  
  input AddGameInput {
    name: String
    genre: String
    platforms: String
    description: String
    contactNumber: String
    imageUrl: String
    imageAlt: String
    address: AddressInput
  }

  input AddressInput {
    areaCountry: String
    city: String
    street: String
  }

`;

export const gamesTypeDefsQueries = `
  getGames: [Game]
  getGame(id:ID): Game
  getGamesByUserId(id: String): [Game]
`;
export const gamesTypeDefsMutations = `
  editGame(id: ID ,game: EditGameInput): Game
  deleteGame(id: ID): Game
  addGame(game: AddGameInput): Game
`;
