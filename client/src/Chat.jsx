import React, { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation,
  gql,
} from "@apollo/client";
import { Container, Row, Col, FormInput, Button } from "shards-react";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const GET_MESSAGES = gql`
  query {
    messages {
      id
      user
      content
    }
  }
`;

const POST_MESSAGE = gql`
  mutation($user: String!, $content: String!) {
    postMessage(user: $user, content: $content) {
      id
      message {
        id
        user
        content
      }
    }
  }
`;

const Message = ({ messageInfo }) => {
  const { user, content } = messageInfo;
  return (
    <div
      key="id"
      style={{
        display: "flex",
        justifyContent: "left",
        paddingBottom: "1em",
      }}
    >
      <div style={{ background: "#ccc", colour: "black" }}>{content}</div>
    </div>
  );
};

const Messages = ({ user }) => {
  const { data } = useQuery(GET_MESSAGES);

  if (!data) return null;

  return data.messages.map((message) => <Message messageInfo={message} />);
};

const Chat = () => {
  const [state, setState] = useState({ user: "jatin", content: "" });
  const [postMessage] = useMutation(POST_MESSAGE);

  const onSend = () => {
    if (state.content.length > 0) {
      console.log("sending called");
      postMessage({ variables: state });
      setState({ user: "jatin", content: "" });
    }
  };
  return (
    <Container>
      <Messages user={state.user} />
      <Row>
        {/* name of the user */}
        <Col xs={2} style={{ padding: 0 }}>
          <FormInput
            label="User"
            value={state.user}
            onChange={(e) => setState({ ...state, user: e.target.value })}
          ></FormInput>
        </Col>
        {/* message */}
        <Col xs={8}>
          <FormInput
            label="Content"
            value={state.content}
            onChange={(e) => setState({ ...state, content: e.target.value })}
            onKeyUp={(e) => {
              if (e.keyCode === 13) {
                onSend();
              }
            }}
          ></FormInput>
        </Col>
        {/* button */}
        <Col xs={2} style={{ padding: 0 }}>
          <Button onclick={() => onSend()}>Send</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default () => (
  <ApolloProvider client={client}>
    <Chat />
  </ApolloProvider>
);
