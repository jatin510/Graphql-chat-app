const messages: any = [
  {
    id: "123",
    user: "jatin",
    content: "jatin",
  },
];

export default {
  Query: {
    messages: () => messages,
  },
  Mutation: {
    message: () => messages,
  },
};
