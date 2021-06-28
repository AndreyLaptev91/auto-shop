import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Catalog() {
  const [catalog, setCatalog] = useState([]);
  useEffect(() => {
    fetch("/catalog")
      .then((res) => res.json())
      .then((data) => setCatalog(data));
  }, []);
  return (
    <Container className="py-5">
      <Row>
        <Col xs={3}></Col>
        <Col xs={9}>
          <Row>
            {catalog.map((el) => (
              <Col sm={12} md={6} lg={4} xl={4}>
                <Card className="mb-3">
                  <Card.Img variant="top" src={el.image} className="auto-img" />
                  <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                    <Card.Text className="d-flex justify-content-between align-items-centr">
                      {el.description}
                    </Card.Text>
                    <span>Цена: </span>
                    <span>{el.price} РУБ</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Catalog;
