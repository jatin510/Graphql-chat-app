const messages: any = [
  {
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
