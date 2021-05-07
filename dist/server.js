"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const server = new graphql_yoga_1.GraphQLServer();
server.start(({}) => {
  console.log(`Server started on http://localhost:`);
});
//# sourceMappingURL=server.js.map
