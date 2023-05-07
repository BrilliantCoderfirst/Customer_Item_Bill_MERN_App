import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand style={{ fontSize: "25px" }}>
            <Link
              to="/customers"
              style={{ textDecoration: "none", color: "white" }}
            >
              MERN APP
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            <Form className="d-flex">
              <Nav
                className="me-auto my-2 my-lg-0 mainNavbar"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link>
                  <Link to="/customers"> Customers </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/items"> Items </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/bills"> Bills </Link>
                </Nav.Link>
              </Nav>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
