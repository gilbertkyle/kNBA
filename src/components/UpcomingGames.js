import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUpcomingGames } from "../actions/games";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UpcomingGames = () => {
  const dispatch = useDispatch();
  const upcomingGames = useSelector(state => state.games.upcoming);

  // Stolen from https://stackoverflow.com/questions/40774697/how-to-group-an-array-of-objects-by-key
  function groupBy(xs, f) {
    return xs.reduce((r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r), {});
  }

  const formatDate = date => {
    let newDate = new Date(date);
    newDate = new Date(newDate.setDate(newDate.getDate() + 1));
    return newDate.toLocaleDateString();
  };

  const groupedByDate = groupBy(upcomingGames, game => game.date);

  useEffect(() => {
    dispatch(getUpcomingGames());
  }, [dispatch]);

  return (
    <Container>
      <Link to="/player/search">
        <h2>Upcoming games</h2>
      </Link>
      <hr />
      {groupedByDate &&
        Object.entries(groupedByDate).map((day, index) => (
          <div key={index}>
            <h3>{formatDate(day[0])}</h3>
            <CardBox>
              {day[1].map(game => (
                <Card key={game.id}>
                  <span>{game.status}</span>
                  <p>{game.home_team.full_name}</p>
                  <p>{game.visitor_team.full_name}</p>
                </Card>
              ))}
            </CardBox>
          </div>
        ))}
    </Container>
  );
};

const Container = styled.div`
  border: 3px solid #01579b;
  border-radius: 1rem;
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 1rem;
  h2 {
    text-align: center;
    padding: 1rem;
  }
  h3 {
    text-align: center;
    margin-top: 1rem;
  }
  hr {
    margin: 0 1rem;
  }
`;

const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem 0rem;
`;

const Card = styled.div`
  border: 1px solid black;
  padding: 1rem;
  margin: 2rem;
  width: 25%;
  border-radius: 0.5rem;
  box-shadow: 1px 2px 5px gray;
`;

export default UpcomingGames;
