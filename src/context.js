import React, { useState, createContext } from "react";

export const CartContext = createContext();
const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <CartContext.Provider value={{ cart, setCart }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default Context;
