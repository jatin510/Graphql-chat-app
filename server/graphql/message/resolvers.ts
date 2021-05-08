const messages: any = [];

interface PostMessage {
  content: string;
  user: string;
}

interface Message {
  content: string;
  user: string;
  id: string;
}

export default {
  Query: {
    messages: () => messages,
  },
  Mutation: {
    postMessage: (_parent: any, args: PostMessage) => {
      const { content, user } = args;
      const id: string = messages.length;

      const newMessage: Message = {
        content,
        user,
        id,
      };
      messages.push(newMessage);

      return { id: id, message: newMessage };
    },
  },
};
