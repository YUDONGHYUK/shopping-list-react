import React, { Component } from "react";
import AddItemForm from "./addItemForm";
import Item from "./item";

class Items extends Component {
  render() {
    return (
      <div className="items">
        <ul className="item-list">
          {this.props.items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <AddItemForm onAdd={this.props.onAdd} />
      </div>
    );
  }
}

export default Items;
