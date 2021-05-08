const port = process.env.port || 4000;

const startServer = async () => {
  const app: any = await import("./server/server");

  app.listen(port, () => console.log(`App running in port ${port}`));
};

startServer();
