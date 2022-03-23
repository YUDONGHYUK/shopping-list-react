import React, { Component } from "react";
import "./app.css";
import "@fortawesome/fontawesome-free/js/all";
import Items from "./components/items";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Items />
      </>
    );
  }
}

export default App;
