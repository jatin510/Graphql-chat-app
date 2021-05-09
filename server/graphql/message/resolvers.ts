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

const subscribers = [];
const onMessageUpdates = (fn: any) => subscribers.push(fn);

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

  Subscription: {
    messages: {
      subscribe: (_parent: any, _args: any, context: any) => {
        const { pubsub } = context;
        const channel = Math.random().toString(36).slice(2, 15);

        onMessageUpdates(() => pubsub.publish(channel, { messages }));
        setTimeout(() => pubsub.publish(channel, { messages }));
        return pubsub.asyncIterator(channel);
      },
    },
  },
};
