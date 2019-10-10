import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyle = styled.header`
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
`;

export class Header extends Component {
  render() {
    return (
      <HeaderStyle>
        <h1>ToolList</h1>
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>{" "}
        |{" "}
        <Link to="/about" style={{ color: "white" }}>
          About
        </Link>
      </HeaderStyle>
    );
  }
}

export default Header;
