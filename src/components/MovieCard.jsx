import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

// Redux related
import { useSelector, useDispatch } from "react-redux";
import { setStarred } from "../redux/Actions";

export default function MovieCard(props) {
  // Use redux store
  const currStarred = useSelector((state) => state.starred);
  const dispatch = useDispatch();

  // Get movie info
  const { title, poster, vote, movieId } = props;
  const posterPath = `http://image.tmdb.org/t/p/w500${poster}`;

  // Local state
  const [starState, setStarState] = useState(regularStar);
  console.log(currStarred);

  /**
   * Function used to add a movie id to the redux state if it does not exist, or remove it if it exits
   * @param {string} movieId
   */
  const toggleStarredState = (movieId) => {
    let newStarred = [];

    // Clone currStarred to newStarred be value
    for (const index in currStarred) {
      newStarred[index] = currStarred[index];
    }
    // Check if movie star clicked exists in current state
    if (currStarred.indexOf(movieId) !== -1) {
      const toRemoveStar = currStarred.indexOf(movieId);
      newStarred.splice(toRemoveStar, 1);
      setStarState(regularStar);
    } else {
      newStarred.push(movieId);
      setStarState(solidStar);
    }
    dispatch(setStarred(newStarred));
  };

  return (
    <>
      <div className="top-shadow"></div>
      <Badge pill bg="warning" text="dark" className="review-badge">
        {vote}&nbsp;
        <FontAwesomeIcon icon={solidStar} />
      </Badge>
      <FontAwesomeIcon
        icon={starState}
        className="star-movie h1 text-warning"
        onClick={() => toggleStarredState(movieId)}
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
