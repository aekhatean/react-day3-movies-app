import React, { useState, useEffect } from "react";
import { Col, Container, Row, Figure, ProgressBar } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { movie } from "../API/movies";

export default function Movie() {
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    movie
      .get(`${movieId}?api_key=${process.env.REACT_APP_API_KEY_MOVIE_DB_V3}`)
      .then((res) => setMovieInfo(res.data));
  }, [movieId]);

  const posterPath = `http://image.tmdb.org/t/p/w500${movieInfo.poster_path}`;

  console.log(movieInfo);
  return (
    <main id="movie-page" className="mt-4">
      <Container>
        <Row>
          <Col md={6} xs={5}>
            <Figure>
              <Figure.Image src={posterPath} alt={movieInfo.original_title} />
            </Figure>
          </Col>
          <Col md={6}>
            <Row className="mb-5">
              <Col md={12}>
                <a
                  href={movieInfo.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  <h1>{movieInfo.original_title}</h1>
                </a>
              </Col>
              <Col md={12}>{movieInfo.tagline}</Col>
              <Col md={12}>Release on {movieInfo.release_date}</Col>
            </Row>
            <Row className="mb-3">
              <p className="h2">Movie overview</p>
              <div>{movieInfo.overview}</div>
            </Row>

            <Row className="mb-3">
              <span>
                <ProgressBar
                  variant="warning"
                  now={movieInfo.vote_average * 10}
                  label={`${movieInfo.vote_average} / 10`}
                />
              </span>
              <span>By {movieInfo.vote_count} voters</span>
            </Row>
            <Row className="mb-3">
              <div>- Production costed {movieInfo.budget} USD</div>
              <div>- Generated {movieInfo.revenue} USD in revenue</div>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
