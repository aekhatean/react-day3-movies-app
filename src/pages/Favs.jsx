import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { topMovies } from "../API/movies";
import { MovieCard } from "../components";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

// Redux related
import { useSelector } from "react-redux";

export default function Movies() {
  let { pageNum } = useParams();
  const [moviesInPage, setMoviesInPage] = useState([]);
  const totalStarred = useSelector((state) => state.fav.starred);

  useEffect(() => {
    topMovies
      .get(`sort_by=original_title.desc&page=${pageNum}`)
      .then((res) => res.data.results)
      .then((movies) => setMoviesInPage(movies));
  }, [pageNum]);

  return (
    <main id="movies-page" className="mt-4">
      <Container>
        <h1>Movies you liked</h1>
        <Row>
          {moviesInPage
            .filter((movie) => totalStarred.indexOf(movie.id) > -1)
            .map((favMovie) => (
              <Col md={3} sm={4} xs={6} key={favMovie.id}>
                <MovieCard
                  title={favMovie.original_title}
                  poster={favMovie.poster_path}
                  vote={favMovie.vote_average}
                  movieId={favMovie.id}
                  starDeclared={solidStar}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </main>
  );
}
