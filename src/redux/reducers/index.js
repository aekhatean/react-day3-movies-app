import { combineReducers } from "redux";
// import { changeLanguageReducer } from "./lang";
// import { changeTheme } from "./theme";
// import usersReducer from "./users";
import { modifyStarredMoviesList } from "./favoritMovie";
import moviesReducer from "./movies";

export default combineReducers({
  fav: modifyStarredMoviesList,
  movies: moviesReducer,
});
