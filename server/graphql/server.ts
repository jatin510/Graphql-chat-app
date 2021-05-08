import { ApolloServer, gql } from "apollo-server-express";

import message from "./message";

const defaultTypeDefs = gql`
  type Query
  type Mutation
`;

const typeDefs: any = [defaultTypeDefs, message.types];

const resolvers: any = [message.resolvers];

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default server;
