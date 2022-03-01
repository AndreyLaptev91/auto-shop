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
        <a href="/Products" className="list-group-item">
          Техника
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
              handleRemoveFromCart={this.props.handleRemoveFromCart}
            />
          </div>
        ) : null}

        <i>
          <Search
            className="d-flex align-items-right"
            inputSearch=""
            handleOnInputChange={() => {}}
          />
        </i>
        <i>
          <Filter
            className="d-flex align-items-right"
            inputSearch=""
            filteredProducts={() => {}}
          />
        </i>
      </ul>
    );
  }
}

NavBar.propTypes = {
  showCart: PropTypes.bool.isRequired,
  cartItems: PropTypes.array.isRequired,
  handleShowCart: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  handleChangeSort: PropTypes.func.isRequired,
  handleChangeType: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
  handleOnInputChange: PropTypes.func.isRequired,
};

export default NavBar;
