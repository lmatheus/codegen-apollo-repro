import { gql } from "apollo-server-micro";

const typeDefs = gql`
  enum Role {
    ADMIN
    STANDARD
  }
  type Query {
    users: [User]
  }
  type User {
    id: ID!
    username: String
    role: Role
  }
`;

export default typeDefs;
