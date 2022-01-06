import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function MainNavbar() {
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
              <Link to="/movies" className="nav-link">
                Movies
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
