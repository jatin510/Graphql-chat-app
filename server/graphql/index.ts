import message from "./message";

const defaultTypeDefs = `
  type Query
  type Mutation
`;

export const typeDefs = [defaultTypeDefs, message.types];
export const resolvers = [message.resolvers];
