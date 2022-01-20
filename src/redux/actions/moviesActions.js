import { genres, topMovies } from "../../API/movies";

export const getGenres = (genreName, pageNum, appLang) => (dispatch) => {
  return genres
    .get(`&with_genres=${genreName}&page=${pageNum}&language=${appLang}`)
    .then((res) =>
      dispatch({
        type: "GET_GENRES",
        payload: res.data.results,
      })
    )
    .catch((err) => console.log(err));
};

export const getTopMovies = (pageNum, appLang) => (dispatch) => {
  return topMovies
    .get(`&sort_by=popularity.desc&page=${pageNum}&language=${appLang}`)
    .then((res) =>
      dispatch({
        type: "GET_MOVIES",
        payload: res.data.results,
      })
    )
    .catch((err) => console.log(err));
};
