import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {remove} from '../store/cartSlice';

let Cart = () => {
  let items = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  let handleRemove = (itemId)=>{
    dispatch(remove(itemId))
  }

  return (
    <div className="cart-wrapper">
      {items.length == 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            flexDirection: "column",
          }}>
          <strong>No items added in the Cart. </strong>
          <p>
            {" "}
            Go back to <Link to="/">Home Page</Link>{" "}
          </p>
        </div>
      ) : (
        items.map((item) => {
          return (
            <div className="cartCard">
              <img src={item.image}></img>
              <h5>{item.title}</h5>
              <h5>Price : ${item.price} </h5>

              <button className="remove-btn" onClick={()=>handleRemove(item.id)}>Remove Item</button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cart;
