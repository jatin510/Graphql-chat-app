import { GraphQLServer } from "graphql-yoga";
import { typeDefs, resolvers } from "./graphql";

// const typeDefs = `
// type Query{
//   hello(name : String) : String!
// }`;

// const resolvers = {
//   Query: {
//     hello: (_: any, { name }: any) => `Hello ${name || "World"}`,
//   },
// };

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(({ port }: any) => {
  console.log(`Server started on http://localhost:${port}`);
});
