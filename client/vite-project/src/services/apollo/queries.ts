import { gql } from "@apollo/client";

export const QUERY_GAME = gql`
  query Game($gameId: String!) {
    game(id: $gameId) {
      _id
      name
      genre
      platforms
      description
      contactNumber
      imageUrl
      dateGame
      imageAlt
      address {
        areaCountry
        city
        street
      }
      userId
      email
    }
  }
`;

export const QUERY_GAMES = gql`
  query Games {
    games {
      _id
      name
      genre
      platforms
      description
      contactNumber
      imageUrl
      dateGame
      imageAlt
      address {
        areaCountry
        city
        street
      }
      userId
      email
    }
  }
`;

export const QUERY_GAMES_BY_USERID = gql`
  query GamesByUserId($gamesByUserIdId: String!) {
    gamesByUserId(id: $gamesByUserIdId) {
      _id
      name
      genre
      platforms
      description
      contactNumber
      imageUrl
      dateGame
      imageAlt
      address {
        areaCountry
        city
        street
      }
      userId
      email
    }
  }
`;

export const QUERY_USERS = gql`
  query Users {
    users {
      id
      firstName
      lastName
      email
      password
      isAdmin
    }
  }
`;

export const QUERY_USER = gql`
  query User($userId: Float!) {
    user(id: $userId) {
      id
      firstName
      lastName
      email
      password
      isAdmin
    }
  }
`;
