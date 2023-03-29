import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(()=>{
    const storedCart = getShoppingCart()
    let savedCart = [];
    for(const id in storedCart){
      // step 1 : get id 
      const addedProduct = products.find(product => product.id === id);
      // step 2 : get the priduct by using id 
      if(addedProduct){
        // step 3 : get quantiry of the product 
      const quantity = storedCart[id]
      addedProduct.quantity = quantity;
      // add the added the product to the saved cart 
      savedCart.push(addedProduct);
      }
      // step 5 set the cart 
      setCart(savedCart);
    }
  } ,[products])

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            handleAddToCart={handleAddToCart}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className="summary-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
