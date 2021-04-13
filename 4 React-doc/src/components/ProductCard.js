import React, { Component } from "react";

class ProductCard extends Component {
  constructor() {
    super();
    console.log(`Class componenet created`);
  }

  render() {
    return (
      <div className="product-card">
        <h1>Product card</h1>
        <h4>Product name: {this.props.name}</h4>
        <h4>Model: {this.props.model}</h4>
        <h4>Price: {this.props.price}</h4>
      </div>
    );
  }
}
export default ProductCard;
