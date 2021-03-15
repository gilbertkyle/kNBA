import { FETCH_TODAYS_GAMES, FETCH_UPCOMING_GAMES } from "../actions/types";

const initialState = {
  today: [],
  upcoming: []
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODAYS_GAMES:
      return {
        ...state,
        today: action.payload
      };
    case FETCH_UPCOMING_GAMES:
      return {
        ...state,
        upcoming: action.payload
      };
    default: {
      return {
        ...state
      };
    }
  }
};

export default gamesReducer;
