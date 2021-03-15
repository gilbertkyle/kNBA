import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { searchPlayersURL } from "../api";
import styled from "styled-components";

const Players = () => {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const [players, setPlayers] = useState([]);
  // Search query contained in params.q
  useEffect(() => {
    const getPlayerQuery = async player => {
      const response = await axios.get(searchPlayersURL(player));
      const data = response.data.data;
      setPlayers(data);
    };
    getPlayerQuery(params.q);
  }, [params.q]);
  return (
    <Container>
      <table>
        <tr>
          <th>Name</th>
          <th>Team</th>
          <th>Position</th>
          <th>Height</th>
          <th>Weight</th>
        </tr>
        {players &&
          players.map(player => (
            <tr>
              <td>{`${player.first_name} ${player.last_name}`}</td>
              <td>{player.team ? `${player.team.abbreviation}` : "N/A"}</td>
              <td>{`${player.position || "N/A"}`}</td>
              <td>
                {player.height_feet ? `${player.height_feet}' ${player.height_inches}"` : "N/A"}
              </td>
              <td>{`${player.weight || "N/A"}`}</td>
            </tr>
          ))}
      </table>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  th {
    padding: 1rem;
    text-align: center;
  }
  td {
    text-align: left;
    &:not(:first-child) {
      text-align: right;
    }
  }
`;

export default Players;
