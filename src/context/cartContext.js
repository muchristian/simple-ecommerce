import React, { createContext, useState } from "react";

export const cartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    setCartProducts((prevState) => [...prevState, product]);
  };

  const removeToCart = (product) => {
    const filteredProducts = cartProducts.filter(
      (prod) => prod.id !== product.id
    );
    setCartProducts(filteredProducts);
  };

  return (
    <cartContext.Provider value={{ cartProducts, addToCart, removeToCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
