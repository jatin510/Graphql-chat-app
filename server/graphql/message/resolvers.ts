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

const subscribers: any = [];
const onMessageUpdates = (fn: any) => subscribers.push(fn);

export default {
  Query: {
    messages: () => messages,
  },
  Mutation: {
    postMessage: (_parent: any, args: PostMessage, context: any) => {
      console.log(context.pubSub);
      const { content, user } = args;
      const id: string = messages.length;

      const newMessage: Message = {
        content,
        user,
        id,
      };
      messages.push(newMessage);
      subscribers.forEach((fn: any) => fn());
      return { id: id, message: newMessage };
    },
  },

  Subscription: {
    messages: {
      subscribe: (_parent: any, _args: any, context: any) => {
        const { pubSub } = context;
        const channel = Math.random().toString(36).slice(2, 15);

        onMessageUpdates(() => pubSub.publish(channel, { messages }));
        setTimeout(() => pubSub.publish(channel, { messages }));
        return pubSub.asyncIterator(channel);
      },
    },
  },
};
