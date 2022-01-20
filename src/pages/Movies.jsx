import React, { useEffect, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

// import { topMovies } from "../API/movies";
import { getTopMovies } from "../redux/actions/moviesActions";
import { MovieCard, Paginator } from "../components";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

// Redux related
import { useSelector, useDispatch } from "react-redux";

// Contexts
import { langContext } from "../contexts/LanguageContext";

export default function Movies() {
  let { pageNum } = useParams();
  const dispatch = useDispatch();
  const totalStarred = useSelector((state) => state.fav.starred);
  const moviesInPage = useSelector((state) => state.movies.topMovies);
  const { contextLang } = useContext(langContext);

  useEffect(() => {
    dispatch(getTopMovies(pageNum, contextLang));
  }, [dispatch, pageNum, contextLang]);

  return (
    <main id="movies-page" className="mt-4">
      <Container>
        <h1>{contextLang === "en" ? "Movies catalogue" : "الأفلام"}</h1>
        <Row>
          {moviesInPage.map((movie) => (
            <Col md={3} sm={4} xs={6} key={movie.id}>
              <MovieCard
                title={movie.original_title}
                poster={movie.poster_path}
                vote={movie.vote_average}
                movieId={movie.id}
                starDeclared={
                  totalStarred.indexOf(movie.id) > -1 ? solidStar : null
                }
              />
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center">
          <Col md={12}>
            <Paginator page="movies" currIndex={pageNum} api={getTopMovies} />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
