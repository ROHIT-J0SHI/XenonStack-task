import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Recommendations() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        browsing_history: "example history",
        preferences: "example preferences",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setRecommendations(data);
      })
      .catch((error) => console.error("Error fetching recommendations:", error));
  }, []);

  return (
    <Container>
      <h1 className="my-4">Recommended Properties</h1>
      <Row>
        {recommendations.map((recommendation, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Property ID: {recommendation.property_id}</Card.Title>
                <Card.Text>Score: {recommendation.score}</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Recommendations;
