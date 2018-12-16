import React from "react";
import { render } from "react-dom";
import Home from "../../src/Home";
import Nav from "../../src/Nav";

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <Nav />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
