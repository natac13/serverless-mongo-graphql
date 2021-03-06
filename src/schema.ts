export default `
type User {
  _id: ID
  name: String
  email: String
  position: String
  employeeId: Int
}

input UserInput {
  name: String!
  email: String!
  position: String
  employeeId: Int
}

input UserUpdate {
  name: String
  email: String
  position: String
  employeeId: Int
}

type Query {
  getUser(_id: ID!): User
  allUsers(
    name: String
    email: String
    posistion: String
    employeeId: Int
  ): [User]!
}

type Mutation {
  createUser(User: UserInput!): User
  updateUser(_id: ID, Updates: UserUpdate!): User
  deleteUser(_id: ID): Boolean
}
`
