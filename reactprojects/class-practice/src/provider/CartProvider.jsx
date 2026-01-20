import React, { useState } from "react";
import { AddContext } from "../context/AddContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(0);

  const addCart = () => {
    setCart(cart + 1);
  };
  return (
    <>
      <AddContext.Provider value={{ cart, addCart }}>
        {children}
      </AddContext.Provider>
    </>
  );
};

export default CartProvider;
