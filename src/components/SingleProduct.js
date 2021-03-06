import React, { useState, useContext } from "react";
import { CartContext } from "../Context";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="products">
      <img src={prod.image} alt={prod.name}></img>
      <div className="productDesc">
        <span>{prod.name}</span>
        <span>${prod.price}</span>
      </div>
      {cart.includes(prod) ? (
        <div>
          <button
            onClick={() => {
              setCart(cart.filter((c) => c.id !== prod.id));
            }}
          >
            Delete
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              setCart([...cart, prod]);
            }}
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
