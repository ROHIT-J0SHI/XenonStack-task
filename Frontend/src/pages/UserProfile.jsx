// src/pages/UserProfile.jsx
import React, { useState } from 'react';
import { getRecommendations } from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ListGroup, Spinner, Alert, Container } from 'react-bootstrap';

const UserProfile = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecommendations = async () => {
    setLoading(true);
    setError(null);

    const userData = {
      browsing_history: "2BHK apartment New York",
      preferences: "New York, 2BHK"
    };

    try {
      const data = await getRecommendations(userData);
      setRecommendations(data);
    } catch (err) {
      setError('Failed to fetch recommendations');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <h1>Hii!!!</h1>
      <Button variant="primary" onClick={fetchRecommendations}>
        Get Recommendations
      </Button>
      {loading && <Spinner animation="border" className="mt-3" />}
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      <ListGroup className="mt-3">
        {recommendations.map(property => (
          <ListGroup.Item key={property.property_id}>
            {property.description}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default UserProfile;
