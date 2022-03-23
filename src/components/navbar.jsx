import React, { Component } from "react";

class Navbar extends Component {
  render() {
    console.log(this.props);
    return (
      <nav className="navbar">
        <span className="navbar-title">Shopping List</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
