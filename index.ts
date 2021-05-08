const port = process.env.port || 4000;

const startServer = () => {
  import("./server/server");
};

startServer();
