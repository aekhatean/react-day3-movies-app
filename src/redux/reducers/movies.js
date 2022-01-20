const INITIAL_STATE = {
  topMovies: [],
};

export default function moviesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_GENRES":
      return { topMovies: action.payload };
    case "GET_MOVIES":
      return { topMovies: action.payload };
    default:
      return state;
  }
}
