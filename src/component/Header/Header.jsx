import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <nav className="header">
      <img src="../src/images/Logo.svg" alt="" />
      <div>
        <Link to='/'>Shop</Link >
        <Link to='/orders'>Order</Link >
        <Link to='/inventory'>Inventory</Link >
        <Link to='/login'>Login</Link >
      </div>
    </nav>
  );
};

export default Header;
