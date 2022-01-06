import axios from "axios";

const { REACT_APP_API_KEY_MOVIE_DB_V3 } = process.env;
const topMovies = axios.create({
  baseURL: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY_MOVIE_DB_V3}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate`,
});

const movie = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/`,
});

export { topMovies, movie };
