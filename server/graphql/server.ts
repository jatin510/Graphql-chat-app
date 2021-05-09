import { ApolloServer, gql, PubSub } from "apollo-server-express";

import message from "./message";

const defaultTypeDefs = gql`
  type Query
  type Mutation
  type Subscription
`;

const typeDefs: any = [defaultTypeDefs, message.types];

const resolvers: any = [message.resolvers];

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { pubsub },
});

export default server;
