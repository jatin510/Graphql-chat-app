import express from "express";
import cors from "cors";
import server from "./graphql/server";

const app = express();

app.use(cors());

app.get("/test", (req, res) => {
  console.log("hello");
  res.send("hello");
});

server.applyMiddleware({ app, path: "/graphql" });

module.exports = app;
