import React from "react";
import { Link } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function MovieCard(props) {
  const { title, poster, vote, movieId } = props;
  const posterPath = `http://image.tmdb.org/t/p/w500${poster}`;
  return (
    <>
      <div className="top-shadow"></div>
      <Badge pill bg="warning" text="dark" className="review-badge">
        {vote}&nbsp;
        <FontAwesomeIcon icon={solidStar} />
      </Badge>
      <FontAwesomeIcon
        icon={regularStar}
        className="star-movie h1 text-warning"
      />

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
