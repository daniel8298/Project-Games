export const usersTypeDefs = `
  type User {
    _id: ID
    email: String
    password: String
  }
  type RegisterUser {
    _id: ID!
    email: String!
    password: String!
  }
  type Token {
    token: String!
  }
  input RegisterUserInput {
    email: String!
    password: String!
  }
  input LoginUserInput {
    email: String!
    password: String!
  }

`;

export const usersTypeDefsQueries = `
  getUsers: [User]
  getUser(id: ID): User
`;
export const usersTypeDefsMutations = `
  signUpUser(user: RegisterUserInput): RegisterUser
  signInUser(user: LoginUserInput): Token
`;

export const usersTypeDefsSubscriptions = `
  userRegister: User
`;
