export const gameTypesDefs = `
scalar Date

  type Area {
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
    area: Area
  }

  input EditGameInput {
    name: String
    genre: String
    platforms: String
    description: String
    contactNumber: String
    imageUrl: String
    imageAlt: String
    area: AreaInput
  }
  
  input AddGameInput {
    name: String
    genre: String
    platforms: String
    description: String
    contactNumber: String
    imageUrl: String
    imageAlt: String
    area: AreaInput
  }

  input AreaInput {
    areaCountry: String
    city: String
    street: String
  }

`;

export const gamesTypeDefsQueries = `
  getGames: [Game]
  getGame(id:ID): Game
`;
export const gamesTypeDefsMutations = `
  editGame(id: ID ,game: EditGameInput): Game
  deleteGame(id: ID): Game
  addGame(game: AddGameInput): Game
`;
