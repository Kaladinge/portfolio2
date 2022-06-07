import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { projectData } from "../data/api";

export default function ProjectCards() {
  return (
    <Container>
      <Row className="mt-5 justify-content-between">
        {projectData.map((item) => (
          <Col lg={4} key={item.title} className="mb-4">
            <Card
              className="card w-100 h-100 position-relative overflow-hidden"
              style={{ borderRadius: "10px" }}
            >
              <Card.Img variant="top" src={item.screenshot} />
              <Card.Body className="card--body d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="card--title text-center">
                    {item.title}
                  </Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </div>
                <div className="d-flex justify-content-around">
                  <a href={item.github} className="card--link">
                    Github
                  </a>
                  <a href={item.livesite} className="card--link">
                    Live site
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
