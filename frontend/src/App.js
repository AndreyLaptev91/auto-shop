import React, { Component } from "react";
import Header from "./Header";
import Products from "./Products";
import Contacts from "./Contacts";
import Basket from "./Basket";
import Navbar from "./Navbar";
import Search from "./Search";
import Main from "./Main";
import Filter from "./Filter";
import { BrowserRouter, Route } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
      sort: "",
      type: "",
      inputSearch: "",
      cartItems: [],
      showCart: false,
    };
  }

  componentDidMount() {
    fetch("/products")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          products: data,
          filteredProducts: data,
        })
      );

    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems")),
      });
    }
  }

  handleChangeSort = (e) => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  };

  handleChangeType = (e) => {
    this.setState({ type: e.target.value });
    this.listProducts();
  };

  handleOnInputChange = (e) => {
    this.setState({ inputSearch: e.target.value });
    this.listProducts();
  };

  handleShowCart = (e) => {
    this.setState({ showCart: !this.state.showCart });
  };

  handleAddToCart = (e, product) => {
    this.setState((state) => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach((item) => {
        if (item.id === product.id) {
          productAlreadyInCart = true;
          item.count++;
        }
      });
      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      return cartItems;
    });
  };

  handleRemoveFromCart = (e, item) => {
    this.setState((state) => {
      const cartItems = state.cartItems.filter((a) => a.id !== item.id);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { cartItems };
    });
  };

  listProducts = () => {
    this.setState((state) => {
      if (state.sort !== "") {
        state.products.sort((a, b) =>
          state.sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : a.price < b.price
            ? 1
            : -1
        );
      } else {
        state.products.sort((a, b) => (a.id > b.id ? 1 : -1));
      }

      if (state.type !== "" && state.inputSearch !== "") {
        return {
          filteredProducts: state.products.filter(
            (a) =>
              a.type.indexOf(state.type) >= 0 &&
              a.name.toLowerCase().indexOf(state.inputSearch) >= 0
          ),
        };
      } else if (state.type !== "") {
        return {
          filteredProducts: state.products.filter(
            (a) => a.type.indexOf(state.type) >= 0
          ),
        };
      } else if (state.inputSearch !== "") {
        return {
          filteredProducts: state.products.filter(
            (a) => a.name.toLowerCase().indexOf(state.inputSearch) >= 0
          ),
        };
      }

      return { filteredProducts: state.products };
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Container className="py-3 d-flex">
            <Row>
              <Col xs={3} className="d-flex">
                <Navbar
                  showCart={this.state.showCart}
                  handleShowCart={this.handleShowCart}
                  cartItems={this.state.cartItems}
                  handleRemoveFromCart={this.handleRemoveFromCart}
                />
              </Col>
              <Col xs={9} className="d-flex">
                <Route path="/Main" component={Main} />

                <Route path="/Contacts" component={Contacts} />
                <Route
                  path="/Products"
                  render={(props) => (
                    <Products
                      {...props}
                      products={this.state.filteredProducts}
                      handleAddToCart={this.handleAddToCart}
                    />
                  )}
                />
                <Route
                  path="/Basket"
                  render={(props) => (
                    <Basket
                      {...props}
                      showCart={this.state.showCart}
                      handleShowCart={this.handleShowCart}
                      cartItems={this.state.cartItems}
                      handleRemoveFromCart={this.handleRemoveFromCart}
                    />
                  )}
                />
                <Route
                  path="/Search"
                  render={(props) => (
                    <Search
                      {...props}
                      inputSearch={this.state.inputSearch}
                      handleOnInputChange={this.handleOnInputChange}
                    />
                  )}
                />
                <Route
                  path="/Filter"
                  render={(props) => (
                    <Filter
                      {...props}
                      type={this.state.type}
                      sort={this.state.sort}
                      handleChangeType={this.handleChangeType}
                      handleChangeSort={this.handleChangeSort}
                      count={this.state.filteredProducts.length}
                    />
                  )}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
