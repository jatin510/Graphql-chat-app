const types = `
  type Message {
    id: ID!
    user: String!
    content: String!
  }

  extend type Query {
    messages: [Message!]
  }
`;

export default types;
