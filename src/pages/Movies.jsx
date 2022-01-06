import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { topMovies } from "../API/movies";
import { MovieCard, Paginator } from "../components";

export default function Movies() {
  const [pageNum, setPageNum] = useState(1);
  const [moviesInPage, setMoviesInPage] = useState([]);

  useEffect(() => {
    topMovies
      .get(`&page=${pageNum}`)
      .then((res) => res.data.results)
      .then((movies) => setMoviesInPage(movies));
  }, [pageNum]);

  return (
    <main id="movies-page" className="mt-4">
      <Container>
        <h1>Movies catalogue</h1>
        <Row>
          {moviesInPage.map((movie) => (
            <Col md={3} sm={4} xs={6}>
              <MovieCard
                title={movie.original_title}
                poster={movie.poster_path}
                vote={movie.vote_average}
                movieId={movie.id}
              />
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center">
          <Col md={12}>
            <Paginator />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
