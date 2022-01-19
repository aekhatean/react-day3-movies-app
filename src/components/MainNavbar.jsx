import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

// Redux related
import { useSelector } from "react-redux";

// Utilities
import ChangeLanguage from "./utilities/ChangeLang";

export default function MainNavbar() {
  const totalStarred = useSelector((state) => state.fav.starred);
  console.log(totalStarred);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-between">
          <Link to="/" className="navbar-brand">
            Moviepedia
          </Link>
          <Nav className="me-auto">
            <Nav.Item>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/movies/1" className="nav-link">
                Movies
              </Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item>
              <ChangeLanguage />
            </Nav.Item>

            <Nav.Item>
              <Link to="/favorites" className="nav-link text-warning">
                <FontAwesomeIcon icon={solidStar} />
                &nbsp;
                {totalStarred.length} movies
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
