import React, { useState, useEffect, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { topMovies } from "../API/movies";
import { MovieCard, Paginator } from "../components";
import { langContext } from "../contexts/LanguageContext";

export default function Genre() {
  const { genreName, pageNum } = useParams();
  const [genreMovies, setGenreMovies] = useState([]);
  const { contextLang } = useContext(langContext);

  useEffect(() => {
    topMovies
      .get(`&with_genres=${genreName}&page=${pageNum}`)
      .then((res) => setGenreMovies(res.data.results));
  }, [genreName, pageNum]);

  return (
    <main id="movies-page" className="mt-4">
      <Container>
        <h1>{contextLang === "en" ? `${genreName} movies` : genreName}</h1>
        <Row>
          {genreMovies.map((movie) => (
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
        <Row className="justify-content-center">
          <Col md={12}>
            <Paginator
              page={`genre/${genreName}`}
              currIndex={pageNum}
              api={topMovies}
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
