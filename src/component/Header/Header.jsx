import React from "react";
import './Header.css'

const Header = () => {
  return (
    <nav className="header">
      <img src="../src/images/Logo.svg" alt="" />
      <ul>
        <li>Order</li>
        <li>Order Review</li>
        <li>Manage Inventory</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Header;
