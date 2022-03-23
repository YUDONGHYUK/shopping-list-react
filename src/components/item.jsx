import React, { Component } from "react";

class Item extends Component {
  render() {
    const { name, count } = this.props.items;
    return (
      <li className="item">
        <div className="item-info">
          <span className="item-name">{name}</span>
          <span className="item-count">{count}</span>
        </div>
        <div className="item-button">
          <button className="item-increase">
            <i className="fas fa-plus"></i>
          </button>
          <button className="item-decrease">
            <i className="fas fa-minus"></i>
          </button>
          <button className="item-delete">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default Item;
