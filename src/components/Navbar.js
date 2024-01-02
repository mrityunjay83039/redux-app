import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

let Navbar = ()=>{
    let items = useSelector((state)=>state.cart);
    return(
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <span className="logo">REDUX STORE</span>
            <div>
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/cart">Cart</Link>
                <span className="cartCount">Cart Item : {items.length}</span>
            </div>
        </div>
    )
}

export default Navbar;