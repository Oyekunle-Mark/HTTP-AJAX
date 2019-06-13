import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 20px 10px;
  background: rgb(19, 18, 18);

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    font-family: "Pacifico", cursive;
    font-size: 30px;
  }

  div a {
    margin: 0 15px;
    font-size: 14px;
    font-weight: lighter;
  }
`;

export default function Navigation() {
  return (
    <StyledNav>
      <h1>My Friend Diary</h1>

      <div>
        <Link to="/">Friends</Link>
        <Link to="/add_friend">Add Friend</Link>
      </div>
    </StyledNav>
  );
}
