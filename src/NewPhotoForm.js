import React, { Component } from "react";

class NewPhotoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "",
      caption: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd({ ...this.state });
    this.setState({ src: "", caption: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="src" onChange={this.handleChange} value={this.state.src} />
        <input
          name="caption"
          onChange={this.handleChange}
          value={this.state.caption}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default NewPhotoForm;
