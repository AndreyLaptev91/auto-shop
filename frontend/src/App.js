import React, { useState, useEffect } from "react";
import Header from "./Header";
import Catalog from "./Catalog";
import Contacts from "./Contacts";
import Basket from "./Basket";
import Main from "./Main";
import Navbar from "./Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "./App.css";

function App() {
  const [setBasket] = useState([]);
  useEffect(() => {
    fetch("/catalog")
      .then((res) => res.json(x))
      .then((data) => setBasket(data));
  }, []);
  const { products, onAdd, onRemove } = catalog;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Container className="py-3 d-flex">
          <Row>
            <Col xs={3} className="d-flex">
              <Navbar />
            </Col>
            <Col xs={9} className="d-flex">
              <Route
                onAdd={onAdd}
                products={products}
                path="/Catalog"
                component={Catalog}
              />
              <Route path="/Contacts" component={Contacts} />
              <Route
                countCartItems={cartItems.length}
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                path="/Basket"
                component={Basket}
              />
              <Route path="/Main" component={Main} />
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
