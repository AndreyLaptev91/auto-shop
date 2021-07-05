import React, { Component } from "react";
import PropTypes from "prop-types";
import Basket from "./Basket";
import Filter from "./Filter";
import Search from "./Search";

export class NavBar extends Component {
  render() {
    return (
      <ul className="list-group list-group-flush">
        <a href="/Main" className="list-group-item">
          Главная
        </a>
        <a href="/Catalog" className="list-group-item">
          Автомобили
        </a>
        <a href="/Contacts" className="list-group-item">
          Контакты
        </a>
        <a
          href="/Basket"
          className="list-group-item"
          onClick={(e) => this.props.handleShowCart(e)}
        >
          {" "}
          Корзина ( {this.props.cartItems.length} )
        </a>
        {this.props.showCart ? (
          <div className="dialog-styles">
            <button
              className="dialog-close-button"
              onClick={(e) => this.props.handleShowCart(e)}
            >
              x
            </button>
            <Basket
              showCart={this.props.showCart}
              cartItems={this.props.cartItems}
              handleRemoveFromCart={this.props.handleRemoveFromCart}
            />
          </div>
        ) : null}
        <p>
          <Search className="d-flex align-items-right" />
        </p>
        <p>
          <Filter />
        </p>
      </ul>
    );
  }
}

NavBar.propTypes = {
  showCart: PropTypes.bool.isRequired,
  cartItems: PropTypes.array.isRequired,
  handleShowCart: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default NavBar;
