import React from "react";
import Ticker from "./Ticker";
import UpcomingGames from "./UpcomingGames";
import Players from "./Players";

const Dashboard = () => {
  return (
    <>
      <Ticker />
      <UpcomingGames />
      <Players />
    </>
  );
};
export default Dashboard;
