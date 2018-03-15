import React, { Component } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

import todos from "./index.model";
import Add from "./Add";
import List from "./List";
import Filter from "./Filter";

export default () => <Todos todos={todos} />;

const Wrapper = styled.div`
  width: 500px;
  padding: 48px;
  font-size: 14px;
  margin: 0 auto;
`;

@observer
class Todos extends Component {
  state = {
    todos: []
  };
  onSubmitHandler = v => {
    this.setState((prevState, props) => ({
      todos: [...prevState.todos, { completed: false, text: v }]
    }));
  };
  onItemChangeCompletedHandler = (i, completed) => {
    this.setState((prevState, props) => {
      const todos = prevState.todos;
      todos[i].completed = completed;

      return { todos: todos };
    });
  };
  render() {
    return (
      <Wrapper>
        <Add onSubmit={this.onSubmitHandler} />
        <List todos={this.state.todos} onItemChangeCompleted={this.onItemChangeCompletedHandler} />
        <Filter />
      </Wrapper>
    );
  }
}
