import { gql } from "@apollo/client";

export const MUTATIONS_USER_SIGNUP = gql`
  mutation RegisterUser($inputUser: RegisterUser!) {
    registerUser(inputUser: $inputUser)
  }
`;
export const MUTATIONS_USER_SIGNIN = gql`
  mutation LoginUser($inputUser: LoginUser!) {
    loginUser(inputUser: $inputUser)
  }
`;
export const MUTATIONS_EDIT_GAME = gql`
  mutation UpdateGame($updateGameId: String!, $inputGame: GameInputUpdate!) {
    updateGame(id: $updateGameId, inputGame: $inputGame)
  }
`;

export const MUTATION_ADD_GAME = gql`
  mutation CreateGame($inputGame: GameInputCreate!) {
    createGame(inputGame: $inputGame)
  }
`;
export const MUTATION_DELETE_GAME = gql`
  mutation DeleteGame($deleteGameId: String!) {
    deleteGame(id: $deleteGameId)
  }
`;
