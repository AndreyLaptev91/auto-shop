import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Navbar() {
  return (
    <Container className="py-5">
      <Row>
        <Col xs={3} className="s">
          <ul class="list-group list-group-flush">
            <a href="/Main" class="list-group-item">
              Главная
            </a>
            <a href="/Catalog" class="list-group-item">
              Автомобили
            </a>
            <a href="/Contacts" class="list-group-item">
              Контакты
            </a>
            <a href="/Basket" class="list-group-item">
              Корзина
            </a>
          </ul>
        </Col>
        <Col xs={9}></Col>
      </Row>
    </Container>
  );
}

export default Navbar;
