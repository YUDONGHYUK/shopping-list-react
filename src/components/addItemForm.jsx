import React, { Component } from "react";

class AddItemForm extends Component {
  inputRef = React.createRef();
  formRef = React.createRef();
  handleAdd = (e) => {
    e.preventDefault();
    const text = this.inputRef.current.value;
    text.trim() && this.props.onAdd(text.trim());
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
