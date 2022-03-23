import React, { Component } from "react";
import { useRef } from "react/cjs/react.production.min";

class AddItemForm extends Component {
  inputRef = React.createRef();
  formRef = React.createRef();
  handleAdd = (e) => {
    e.preventDefault();
    this.props.onAdd(this.inputRef.current.value);
    this.formRef.current.reset();
  };
  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.handleAdd}>
        <input ref={this.inputRef} type="text" className="add-input" />
        <button className="add-button">
          <i className="fas fa-plus"></i>
        </button>
      </form>
    );
  }
}

export default AddItemForm;
