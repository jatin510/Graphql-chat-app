const types = `
  type Message {
    user: String!
    content: String!
  }

  extend type Query {
    messages: [Message!]
  }

  extend type Mutation{
    message : [Message!]
  }
`;

export default types;
