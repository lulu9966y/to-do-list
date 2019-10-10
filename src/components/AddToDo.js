import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
`;

const Text = styled.input`
  flex: 10;
  padding: 5px;
`;

const Submit = styled.input`
  flex: 1;
`;

export class AddToDo extends Component {
  state = {
    title: ""
  };

  handleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Text
          type="text"
          name="title"
          value={this.state.title}
          placeholder="Add Todo..."
          onChange={this.handleChange}
        />
        <Submit type="submit" value="Submit" className="btn" />
      </Form>
    );
  }
}

export default AddToDo;
