import React from "react";
import Container from "react-bootstrap/container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../logo.svg";
import ProjectCards from "./ProjectCards";

function HomePage() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h1 className="heading">
              lars-inge <br />{" "}
              <span className="heading--portfolio">portfolio</span>
            </h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <ProjectCards />
    </>
  );
}

export default HomePage;
