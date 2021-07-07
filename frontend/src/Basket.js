import React, { Component } from "react";
import Util from "./Util";
import PropTypes from "prop-types";

export class Basket extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div className="alert alert-info">
        {cartItems.length === 0 ? (
          "Ваша корзина пуста"
        ) : (
          <div >
            {" "}
            У Вас {cartItems.length} техники в корзине{" "}
          </div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li className="m-3 cart-list" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <b> - {item.name} </b>x {item.count} ={" "}
                  {item.price * item.count}
                  <button
                    type="button"
                    className="btn btn-danger ml-3"
                    onClick={(e) => this.props.handleRemoveFromCart(e, item)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            <b>
              Общая сумма:{" "}
              {Util.formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )}
              <button
                className="btn btn-primary m-3"
                onClick={() =>
                  alert("Заказ отправлен на обработку ждите связи с оператором")
                }
              >
                Заказать
              </button>
            </b>
          </div>
        )}
      </div>
    );
  }
}

Basket.propTypes = {
  cartItems: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default Basket;



