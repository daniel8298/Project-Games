import { gql } from "@apollo/client";

export const MUTATIONS_USER_SIGNUP = gql`
  mutation SignUpUser($user: RegisterUserInput) {
    signUpUser(user: $user) {
      _id
      email
      password
    }
  }
`;
export const MUTATIONS_USER_SIGNIN = gql`
  mutation SignInUser($user: LoginUserInput) {
    signInUser(user: $user) {
      token
    }
  }
`;
export const MUTATIONS_EDIT_GAME = gql`
  mutation EditGame($editGameId: ID, $game: EditGameInput) {
    editGame(id: $editGameId, game: $game) {
      area {
        areaCountry
        city
        street
      }
      _id
      contactNumber
      dateGame
      description
      genre
      imageAlt
      imageUrl
      name
      platforms
    }
  }
`;

export const MUTATION_ADD_GAME = gql`
  mutation AddGame($game: AddGameInput) {
    addGame(game: $game) {
      _id
      area {
        areaCountry
        city
        street
      }
      contactNumber
      dateGame
      description
      genre
      imageAlt
      imageUrl
      name
      platforms
    }
  }
`;
export const MUTATION_DELETE_GAME = gql`
  mutation DeleteGame($deleteGameId: ID) {
    deleteGame(id: $deleteGameId) {
      _id
      area {
        areaCountry
        city
        street
      }
      contactNumber
      dateGame
      description
      genre
      imageAlt
      imageUrl
      name
      platforms
    }
  }
`;
