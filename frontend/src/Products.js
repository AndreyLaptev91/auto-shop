import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Util from "./Util";
import PropTypes from "prop-types";

export class Products extends Component {
  render() {
    const productItems = this.props.products.map((product) => (
      <Container>
        <Row>
          <Col xs={9}>
            <Row>
              <Col sm={12} md={6} lg={4} xl={4} className="d-flex">
                <Card className="mb-3" key={product.id}>
                  <Card.Img
                    variant="top"
                    src={product.img}
                    alt={product.name}
                    className="auto-img"
                  />
                  <Card.Body className="auto-body">
                    <Card.Title> {product.name}</Card.Title>
                    <Card.Text className="d-flex justify-content-between align-items-centr">
                      {product.description}
                    </Card.Text>
                    <button
                      onClick={(e) => this.props.handleAddToCart(e, product)}
                    >
                      В Корзину{" "}
                      <span> {Util.formatCurrency(product.price)} РУБ.</span>
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    ));
    return <div className="row">{productItems}</div>;
  }
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default Products;
