import React from "react";
import { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";

const Cart = ({}) => {
  const [total, setTotal] = useState();
  const { cart } = useContext(cartContext);
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
