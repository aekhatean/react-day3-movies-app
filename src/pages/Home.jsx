import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { topMovies, genres } from "../API/movies";
import { MovieCard } from "../components";

export default function Home() {
  const [moviesInPage, setMoviesInPage] = useState([]);
  const [genresInPage, setGenresInPage] = useState([]);

  useEffect(() => {
    topMovies
      .get(`&sort_by=popularity.desc&page=1`)
      .then((res) => res.data.results)
      .then((movies) => setMoviesInPage(movies.splice(0, 8)));

    genres
      .get("")
      .then((res) => res.data.genres)
      .then((fetchedGenres) => setGenresInPage(fetchedGenres));
  }, []);

  return (
    <main id="home-page" className="mt-4">
      <Container className="mb-5">
        <p className="h1 mb-3">Top movies</p>
        <Row>
          {moviesInPage.map((movie) => (
            <Col md={3} sm={4} xs={6} key={movie.id}>
              <MovieCard
                title={movie.original_title}
                poster={movie.poster_path}
                vote={movie.vote_average}
                movieId={movie.id}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <p className="h1 mb-3">Genres</p>
        <Row>
          {genresInPage.map((genre) => (
            <Col md={3} sm={4} xs={6} key={genre.id}>
              <p>{genre.name}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}
