import React, { useEffect } from "react";
import { getTodaysGames, searchPlayer } from "../actions/games";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Ticker = () => {
  const dispatch = useDispatch();

  const todaysGames = useSelector(state => state.games.today);

  useEffect(() => {
    dispatch(getTodaysGames());
    dispatch(searchPlayer());
  }, [dispatch]);

  useEffect(() => {
    // fetches the scores every 10 minutes
    const interval = setInterval(() => dispatch(getTodaysGames()), 1000 * 600);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <GamesTicker>
      {todaysGames &&
        todaysGames.map(game => (
          <TickerObject key={game.id}>
            <div>
              <span>{game.status}</span> <span>{game.time}</span>
            </div>
            <TeamInfo>
              {game.home_team.abbreviation} {game.home_team_score}
            </TeamInfo>
            <TeamInfo>
              {game.visitor_team.abbreviation} {game.visitor_team_score}
            </TeamInfo>
          </TickerObject>
        ))}
    </GamesTicker>
  );
};

const GamesTicker = styled.div`
  display: flex;
  width: 100%;
  background-color: rgba(100, 100, 100, 0.2);
  min-height: 3rem;
`;

const TickerObject = styled.div`
  border-right: 1px solid gray;
  min-width: 10%;
  span {
    display: inline-block;
    padding: 0.5rem;
    font-size: 0.8rem;
  }
`;

const TeamInfo = styled.div`
  padding-left: 0.5rem;
`;

export default Ticker;
