import React, { createContext, useState } from "react";

export const savedContext = createContext([]);

const SavedContextProvider = ({ children }) => {
  const [savedProducts, setSavedProducts] = useState([]);

  const addToSaveList = (product) => {
    setSavedProducts((prevState) => [...prevState, product]);
  };

  const removeFromSaveList = (product) => {
    const filteredProducts = savedProducts.filter(
      (prod) => prod.id !== product.id
    );
    setSavedProducts(filteredProducts);
  };

  return (
    <savedContext.Provider
      value={{ savedProducts, addToSaveList, removeFromSaveList }}
    >
      {children}
    </savedContext.Provider>
  );
};

export default SavedContextProvider;
