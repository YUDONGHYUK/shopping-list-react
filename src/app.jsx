import React, { Component } from "react";
import "./app.css";
import "@fortawesome/fontawesome-free/js/all";
import Items from "./components/items";

class App extends Component {
  render() {
    return (
      <>
        <Items />
      </>
    );
  }
}

export default App;
