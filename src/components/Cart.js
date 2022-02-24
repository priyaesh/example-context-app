import React from "react";
import { useState, useEffect, useContext } from "react";
import SingleProduct from "./SingleProduct";
import { CartContext } from "../Context";

const Cart = ({}) => {
  const [total, setTotal] = useState();
  const { cart } = useContext(CartContext);
  useEffect(() => {
    setTotal(cart.reduce((a, c) => a + Number(c.price), 0));
  }, [cart]);
  return (
    <div>
      <div>My Cart</div>
      <span>Total ${total}</span>

      <div>
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
