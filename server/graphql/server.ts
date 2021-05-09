import { ApolloServer, gql, PubSub } from "apollo-server-express";

import message from "./message";

const defaultTypeDefs = gql`
  type Query
  type Mutation
  type Subscription
`;

const typeDefs: any = [defaultTypeDefs, message.types];

const resolvers: any = [message.resolvers];

const pubSub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  subscriptions: {
    path: "/subscriptions",
    onConnect: (connectionParams, webSocket, context) => {
      console.log("Client connected");
    },
    onDisconnect: (webSocket, context) => {
      console.log("Client disconnected");
    },
  },
  context: { pubSub },
});

export default server;
