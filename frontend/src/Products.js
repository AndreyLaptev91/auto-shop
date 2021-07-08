import React, { Component } from "react";
import Util from "./Util";
import PropTypes from "prop-types";

export class Products extends Component {
  render() {
    const productItems = this.props.products.map((product) => (
      <div className="col-md-4 pb-5" key={product.id}>
        <div className="thumbnail text-center">
          <a href={"javscript:;"}>
            <img
              src={`/product item/${product.unique}.jpg`}
              alt={product.name}
            />
            <p>{product.name}</p>
          </a>
          <div className="pb-3">
            <button
              className="btn btn-dark"
              onClick={(e) => this.props.handleAddToCart(e, product)}
            >
              <b>{Util.formatCurrency(product.price)}</b> Купить
            </button>
          </div>
          <div>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    ));
    return <div className="row">{productItems}</div>;
  }
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default Products;
