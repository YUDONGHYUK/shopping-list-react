import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <span className="navbar-title">Shopping List</span>
        <span className="navbar-count">0</span>
      </nav>
    );
  }
}

export default Navbar;
