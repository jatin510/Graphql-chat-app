import admin from "./admin";

const defaultTypeDefs = `
  type Query
  type Mutation
`;

export const typeDefs = [defaultTypeDefs, admin.types];
export const resolvers = [admin.resolvers];

// export  typeDefs;
// export  resolvers;
