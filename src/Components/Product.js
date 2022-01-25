import React, { Component } from "react";

export class Product extends Component {
  
  render() {
    return (
      <div>
        <span>product name</span>
        <span>2</span>
        <button>+</button>
        <button>-</button>
        <button>delete</button>
      </div>
    );
  }
}

export default Product;
