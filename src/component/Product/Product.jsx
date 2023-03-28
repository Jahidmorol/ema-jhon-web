import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { id, img, name, price, quantity, ratings, seller } = props.product;
  return (
    <div className="product">
      <div className="product-header">
        <img src={img} alt="Photo" />
        <h4>{name}</h4>
        <h5>Price: $ {price}</h5>
        <h6>Manufacturer : {seller}</h6>
        <h6>Rating : {ratings} start</h6>
      </div>
      <button className="product-footer">Add to Cart</button>
    </div>
  );
};

export default Product;
