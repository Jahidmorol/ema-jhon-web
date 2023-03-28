import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
//   console.log(props.product);
  const { id, img, name, price, ratings, seller } = props.product;
  const handleAddToCart = props.handleAddToCart
  
  return (
    <div className="product">
      <div className="product-header">
        <img src={img} alt="Photo" />
        <h4>{name}</h4>
        <h5>Price: $ {price}</h5>
        <h6>Manufacturer : {seller}</h6>
        <h6>Rating : {ratings} start</h6>
      </div>
      <button onClick={() => handleAddToCart(props.product)} className="product-footer">Add to Cart
      <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
