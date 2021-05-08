import { gql } from "apollo-server-express";

const types = gql`
  type Message {
    id: ID
    user: String!
    content: String!
  }

  extend type Query {
    messages: [Message!]
  }

  extend type Mutation {
    message: [Message!]
  }
`;

export default types;
