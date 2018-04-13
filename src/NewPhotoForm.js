import React, { Component } from "react";

class NewPhotoForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd({
      src: e.target.src.value,
      caption: e.target.caption.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input name="src" />
        <input name="caption" />
        <input type="submit" />
      </form>
    );
  }
}

export default NewPhotoForm;
