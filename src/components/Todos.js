import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class Todos extends Component {
  render() {
    // console.log(this.props.todos);
    return this.props.todos.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChange={this.props.handleChange}
          handleClick={this.props.handleClick}
        />
      );
    });
  }
}

export default Todos;
