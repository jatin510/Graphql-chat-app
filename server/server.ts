import express from "express";
import cors from "cors";
import server from "./graphql/server";
import http from "http";

async function startApolloServer() {
  const PORT: number = 4000;
  const app = express();

  app.use(cors());

  app.get("/test", (req, res) => {
    console.log("hello");
    res.send("hello");
  });

  server.applyMiddleware({ app, path: "/graphql" });

  const httpServer = http.createServer(app);
  server.installSubscriptionHandlers(httpServer);

  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`
  );

  httpServer.listen(PORT, () => console.log(`App running in port ${PORT}`));
}

startApolloServer();
