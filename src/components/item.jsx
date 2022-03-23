import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <li className="item">
        <span className="item-name">우유</span>
        <span className="item-count">0</span>
        <button className="item-button item-increase">
          <i class="fas fa-plus-square"></i>
        </button>
        <button className="item-button item-decrease">
          <i class="fas fa-minus-square"></i>
        </button>
        <button className="item-button item-delete">
          <i class="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Item;
