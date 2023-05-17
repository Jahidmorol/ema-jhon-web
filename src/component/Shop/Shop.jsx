import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [productPerPage, setPorductPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const { totalProducts } = useLoaderData();

  const totalPages = Math.ceil(totalProducts / productPerPage);
  // console.log(totalPages);

  // const pageNumbers = [];
  // for (let i = 1; i <= totalPages; i++) {
  //   pageNumbers.push(i);
  // }
  const pageNumbers = [...Array(totalPages).keys()];

  // useEffect(() => {
  //   fetch("http://localhost:5000/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${currentPage}&limit=${productPerPage}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage, productPerPage]);



  useEffect(() => {
    const storedCart = getShoppingCart();
    let savedCart = [];
    for (const id in storedCart) {
      // step 1 : get id
      const addedProduct = products.find((product) => product._id === id);
      // step 2 : get the priduct by using id
      if (addedProduct) {
        // step 3 : get quantiry of the product
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // add the added the product to the saved cart
        savedCart.push(addedProduct);
      }
      // step 5 set the cart
      setCart(savedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product._id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const options = [5, 10, 15, 20];
  const handleSelectChange = (event) => {
    setPorductPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  };

  return (
    <div className="container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            handleAddToCart={handleAddToCart}
            key={product._id}
          ></Product>
        ))}
      </div>
      <div>
        <div className="summary-container">
          <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
          <Link className="proceed-link" to="/orders">
            <button className="btn-proceed">Review Order</button>
          </Link>
        </div>
      </div>
      {/* for pagination section  */}
      <div className="pagination">
        {pageNumbers.map((pageNumber) => (
          <button onClick={() => setCurrentPage(pageNumber)} key={pageNumber}
          className={currentPage === pageNumber ? 'selected' : ''}>
            {pageNumber + 1}
          </button>
        ))}
        <select onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Shop;
