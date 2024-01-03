import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import cartIcon from "../cart-icon.png";

let Navbar = () => {
  let items = useSelector((state) => state.cart);
  return (
    <navbar
      id="main-menu"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <Link to="/" className="logo">
        <span>REDUX STORE</span>
      </Link>
      <ul>
        <li>
          <Link className="navLink" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/cart">
            Cart
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <span className="cart-count">{items.length}</span>
            <img className="cart-icon" src={cartIcon} alt="cart" />
          </Link>
        </li>
      </ul>
    </navbar>
  );
};

export default Navbar;
