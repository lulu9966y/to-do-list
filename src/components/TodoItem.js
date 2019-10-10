import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f4f4f4;
  padding: 10px;
  border-bottom: 1px dotted #ccc;
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
`;

const Button = styled.button`
  background: #ff0000;
  color: white;
  border: none;
  padding: 5px 8px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
`;

export class TodoItem extends Component {
  render() {
    const { id, title } = this.props.todo;
    return (
      <Wrapper completed={this.props.todo.completed}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.handleChange.bind(this, id)}
          />
          {title}
          <Button onClick={this.props.handleClick.bind(this, id)}>X</Button>
        </p>
      </Wrapper>
    );
  }
}

export default TodoItem;
