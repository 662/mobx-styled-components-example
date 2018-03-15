import React, { Component } from "react";

export default class Add extends Component {
  state = {
    value: ""
  };
  onSubmitHandler = e => {
    e.preventDefault();
    const {value} = this.state;
    if (value !== "") {
      this.props.onSubmit(value);
      this.setState({ value: "" });
    }
  };
  onChangleHandler = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input placeholder="What needs to be done?" type="text" onChange={this.onChangleHandler} value={this.state.value} />
        </form>
      </div>
    );
  }
}
