import React, { Component } from "react";

class Item extends Component {
  handleIncrement = () => {
    this.props.onIncrement(this.props.item);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.item);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.item);
  };

  render() {
    const { name, count } = this.props.item;
    return (
      <li className="item">
        <div className="item-info">
          <span className="item-name">{name}</span>
          <span className="item-count">{count}</span>
        </div>
        <div className="item-button">
          <button className="item-increase" onClick={this.handleIncrement}>
            <i className="fas fa-plus"></i>
          </button>
          <button className="item-decrease" onClick={this.handleDecrement}>
            <i className="fas fa-minus"></i>
          </button>
          <button className="item-delete" onClick={this.handleDelete}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default Item;
