import React from "react";
import { Link } from "react-router-dom";

let Navbar = ()=>{
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
                <span className="cartCount">Cart Item : 0</span>
            </div>
        </div>
    )
}

export default Navbar;