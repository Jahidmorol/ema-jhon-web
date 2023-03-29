import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
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
      <div className="summary-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
