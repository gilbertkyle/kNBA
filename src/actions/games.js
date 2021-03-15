import { FETCH_TODAYS_GAMES, FETCH_PLAYERS, FETCH_UPCOMING_GAMES } from "./types";
import { todaysGamesURL, searchPlayersURL, upcomingGamesURL } from "../api";
import axios from "axios";

export const getTodaysGames = () => async dispatch => {
  //dispatch({ type: LOADING_TODAYS_GAMES });

  const response = await axios.get(todaysGamesURL());
  dispatch({
    type: FETCH_TODAYS_GAMES,
    payload: response.data.data
  });
};

export const searchPlayer = (player = "") => async dispatch => {
  const params = {};
  if (player) params.search = player;
  const response = await axios.get(searchPlayersURL(), { params: params });
  dispatch({
    type: FETCH_PLAYERS,
    payload: response.data.data
  });
};

export const getUpcomingGames = () => async dispatch => {
  const response = await axios.get(upcomingGamesURL());

  dispatch({
    type: FETCH_UPCOMING_GAMES,
    payload: response.data.data
  });
};
