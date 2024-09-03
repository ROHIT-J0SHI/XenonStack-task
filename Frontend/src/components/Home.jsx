import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function Home() {
  const properties = [
    {
      id: 1,
      title: "Modern Apartment in City Center",
      image: "https://media.istockphoto.com/id/1026205392/photo/beautiful-luxury-home-exterior-at-twilight.jpg?s=612x612&w=0&k=20&c=HOCqYY0noIVxnp5uQf1MJJEVpsH_d4WtVQ6-OwVoeDo=",
      description: "2 bed, 2 bath, close to all amenities.",
    },
    {
      id: 2,
      title: "Cozy House in Suburbs",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcqgtsGNO_IfzYM6VPS8lNikw4JWE-gsEBjQ&s",
      description: "3 bed, 2 bath, spacious garden.",
    },
    {
      id: 3,
      title: "Luxury Villa with Sea View",
      image: "https://img.freepik.com/free-photo/photorealistic-house-with-wooden-architecture-timber-structure_23-2151302742.jpg",
      description: "5 bed, 4 bath, private pool.",
    },
    {
        id: 1,
        title: "Modern Apartment in Hills",
        image: "https://img.etimg.com/thumb/width-420,height-315,imgsize-22382,resizemode-75,msid-111780228/news/international/world-news/india-has-the-worlds-second-most-expensive-house-check-the-of-the-top-10-costliest-homes/which-mansion-tops-the-list-of-the-worlds-most-expensive-houses.jpg",
        description: "2 bed, 2 bath, close to all amenities.",
      },
      {
        id: 2,
        title: "Luxury House in Switzerland",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVXC_vkvcdAe1mfL6xyBchBnC6q05fn_uvA&s",
        description: "3 bed, 2 bath, spacious garden.",
      },
      {
        id: 3,
        title: "Luxury Villa with moutains view",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMh6_PmzlX4JN3KGMm1azhzJNdq7OA-XgCw&s",
        description: "5 bed, 4 bath, private pool.",
      },
  ];

  return (
    <Container className="mt-4">
      <Row>
        {properties.map((property) => (
          <Col key={property.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={property.image} />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.description}</Card.Text>
                <Button variant="primary" className="mx-8">
                  Rent
                </Button>
                <Button variant="success" className="mx-8 px-8">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
