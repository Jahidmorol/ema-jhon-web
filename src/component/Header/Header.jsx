import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    logOut()
    .then(result => {})
    .catch(error => console.error(error))
  };
  return (
    <nav className="header">
      <img src="../src/images/Logo.svg" alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
        <Link>
          {user && (
            <span>
              {user.email} <button onClick={handleLogOut}>LogOut</button>
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
