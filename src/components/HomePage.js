import React from "react";
import Container from "react-bootstrap/container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.svg";

function HomePage() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default HomePage;
