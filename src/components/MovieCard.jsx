import React from "react";
import { Link } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";

export default function MovieCard(props) {
  const { title, poster, vote, movieId } = props;
  const posterPath = `http://image.tmdb.org/t/p/w500${poster}`;
  return (
    <>
      <Badge pill bg="warning" text="dark" className="review-badge">
        {vote}
      </Badge>
      <div className="top-shadow"></div>
      <Link to={`/movie/${movieId}`}>
        <Card className="bg-dark text-white mb-3">
          <Card.Img src={posterPath} alt={title} />
          <Card.ImgOverlay>
            <Card.Title>{title}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Link>
    </>
  );
}
