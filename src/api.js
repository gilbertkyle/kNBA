import { formatDate } from "./utils";

const BASE_URL = "https://www.balldontlie.io/api/v1";

export const todaysGamesURL = () => {
  let today = formatDate(new Date());

  return `${BASE_URL}/games?start_date=${today}&end_date=${today}`;
};

export const searchPlayersURL = (player = "") => {
  return `${BASE_URL}/players?search=${player}`;
};

export const gameURL = (gameId = 0) => {
  if (gameId) return `${BASE_URL}/games/${gameId}`;
  return `${BASE_URL}/games`;
};

export const getAveragesURL = () => {
  return `${BASE_URL}/season_averages`;
};

export const getTeamURL = (team = 0) => {
  if (team) return `${BASE_URL}/teams/${team}`;
  return `${BASE_URL}/teams`;
};

export const upcomingGamesURL = () => {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow = formatDate(tomorrow);
  let nextWeek = new Date(tomorrow);
  nextWeek.setDate(nextWeek.getDate() + 7);
  nextWeek = formatDate(nextWeek);
  return `${BASE_URL}/games?start_date=${tomorrow}&end_date=${nextWeek}`;
};
