import React, { Component } from "react";

class Item extends Component {
  onChangeHandler = e => {
    const { onChangeCompleted, index } = this.props;
    onChangeCompleted && onChangeCompleted(index, e.target.checked);
  };
  render() {
    const { todo } = this.props;
    return (
      <li>
        <input type="checkbox" onChange={this.onChangeHandler} />
        {todo.completed ? <s>{todo.text}</s> : <span>{todo.text}</span>}
      </li>
    );
  }
}

export default class List extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div>
        <ul>
          {todos.map((todo, i) => (
            <Item
              key={i}
              index={i}
              todo={todo}
              onChangeCompleted={this.props.onItemChangeCompleted}
            />
          ))}
        </ul>
      </div>
    );
  }
}
