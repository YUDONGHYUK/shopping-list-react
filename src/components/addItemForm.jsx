import React, { Component } from "react";

class AddItemForm extends Component {
  render() {
    return (
      <form className="add-form">
        <input type="text" className="add-input" />
        <button className="add-button">
          <i className="fas fa-plus"></i>
        </button>
      </form>
    );
  }
}

export default AddItemForm;
