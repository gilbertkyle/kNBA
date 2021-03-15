import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [player, setPlayer] = useState("");
  const history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    if (player) return history.push(`/player/search?q=${player}`);
  };
  return (
    <Nav>
      <div className="logo-box">
        <img src="" alt="" />
        <Link to="/">
          <h1>Basketball</h1>
        </Link>
      </div>
      <div className="search-box">
        <form onSubmit={handleSubmit}>
          <button type="submit">Search</button>
          <input
            type="text"
            id="search"
            placeholder="Find a player"
            value={player}
            onChange={e => setPlayer(e.target.value)}
            autoComplete="off"
          />
        </form>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #01579b;
  min-height: 5rem;
  border: 1px solid blue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1 {
    top: 50%;
    margin-bottom: 1rem;
    color: white;
    font-size: 2rem;
  }
  input {
    border: none;
    box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.05);
    margin-left: 0.5rem;
    padding: 0.5rem;
    border-radius: 1rem;
    &:focus {
      outline: none;
      background-color: rgba(250, 250, 250, 1);
    }
  }
  button {
    padding: 0.5rem;
    border-radius: 1rem;
    &:focus {
      outline: none;
    }
  }
  a {
    text-decoration: none;
  }
`;

export default Navbar;
