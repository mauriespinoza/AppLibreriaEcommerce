import { createContext, useEffect, useState } from "react";
import { axiosClient } from "../config/api";
export const ProductosContext = createContext();
export const ProductosProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await axiosClient.get("/products");
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductByCategory = async (category) => {
    try {
      const response = await axiosClient.get(`/productscategory/${category}`);
      //console.log("getProductByCategory.response: " + JSON.stringify(response));
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (id) => {
    try {
      const response = await axiosClient.get(`/products/${id}`);

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductosContext.Provider
      value={{ products, getProductByCategory, getProductById }}
    >
      {children}
    </ProductosContext.Provider>
  );
};
