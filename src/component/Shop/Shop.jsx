import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product]
    setCart(newCart)
  };
  return (
    <div className="container">
      <div className="product-container">
        {products.map((product) => (
          <Product product={product} handleAddToCart={handleAddToCart}
          key={product.id}></Product>
        ))}
      </div>
      <div className="right-container">
        <h2>Selected Products</h2>
        <p>See your total order: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
