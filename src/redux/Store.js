import { createStore } from "redux";
import { modifyStarredMoviesList } from "./Reducers";

const store = createStore(modifyStarredMoviesList);

export default store;
