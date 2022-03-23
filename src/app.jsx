import React, { Component } from "react";
import "./app.css";
import "@fortawesome/fontawesome-free/js/all";
import Items from "./components/items";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    items: [
      { id: 0, name: "우유", count: 0 },
      { id: 1, name: "사과", count: 0 },
      { id: 2, name: "바나나", count: 0 },
    ],
  };

  handleIncrement = (clickedItem) => {
    console.log(`handleIncrement ${clickedItem.name}`);
    const items = this.state.items.map((item) => {
      if (item.id === clickedItem.id) {
        return { ...clickedItem, count: clickedItem.count + 1 };
      }
      return item;
    });
    this.setState({ items });
  };

  handleDecrement = (clickedItem) => {
    console.log(`handleDecrement ${clickedItem.name}`);
    const items = this.state.items.map((item) => {
      if (item.id === clickedItem.id) {
        const nextCount = clickedItem.count - 1;
        return { ...clickedItem, count: nextCount < 0 ? 0 : nextCount };
      }
      return item;
    });
    this.setState({ items });
  };

  handleDelete = (clickedItem) => {
    console.log(`handleDelete ${clickedItem.name}`);
    const items = this.state.items.filter((item) => item.id !== clickedItem.id);
    this.setState({ items });
  };

  handleAdd = (text) => {
    const items = [
      ...this.state.items,
      { id: Date.now(), name: text, count: 0 },
    ];
    this.setState({ items });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.items.filter((item) => item.count > 0).length}
        />
        <Items
          items={this.state.items}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
        />
      </>
    );
  }
}

export default App;
