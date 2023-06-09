import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, handleClearCart }) => {
  // console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    if (product.quantity === 0) {
      product.quantity = 1;
    }
    // product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  let tax = (totalPrice * 7) / 100;
  let grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart-container">
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
      <button onClick={handleClearCart} className="btn-clear-cart">
        <span>Clear Cart </span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default Cart;
