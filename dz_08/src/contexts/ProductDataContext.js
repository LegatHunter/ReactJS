import React, { createContext, useState, useEffect } from "react";
import productsData from "../data/Products.json";

export const ProductDataContext = createContext();

export const ProductDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <ProductDataContext.Provider value={{ products }}>
      {children}
    </ProductDataContext.Provider>
  );
};
