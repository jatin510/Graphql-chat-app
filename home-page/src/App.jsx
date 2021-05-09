import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
// import Chat from "chat/Chat";

// console.log(Chat);

const App = () => {
  //   console.log(Chat);
  return (
    <div>
      Hi there, I'm React from Webpack 5.
      {/* <Chat /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
