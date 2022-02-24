import React, { useContext } from "react";
const cartContext = createContext();
const context = ({ children }) => {
  const [cart, setCart] = useState();
  return (
    <div>
      <cartContext.provider value={{ cart, setCart }}>
        {children}
      </cartContext.provider>
    </div>
  );
};

export default context;
