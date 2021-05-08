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

const port: number = 4000;
app.listen(port, () => console.log(`App running in port ${port}`));
