import React, { Component } from "react";
import Item from "./item";

class Items extends Component {
  state = {
    items: [
      { id: 0, name: "우유", count: 0 },
      { id: 1, name: "사과", count: 0 },
      { id: 2, name: "바나나", count: 0 },
    ],
  };
  render() {
    return (
      <>
        {this.state.items.map((item) => (
          <Item key={item.id} items={item} />
        ))}
      </>
    );
  }
}

export default Items;
