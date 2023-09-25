import { createContext, useEffect, useState } from "react";
import { axiosClient } from '../config/api';
export const ProductosContext = createContext();
export const ProductosProvider =({children})=>{
    const [products, setProducts]= useState();
    const getProducts = async () => {
    try {
      const response = await axiosClient.get("/products");
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
   useEffect (() => {
    getProducts();
      }, []);
    return(
        <ProductosContext.Provider value={{products}}>
            {children}
        </ProductosContext.Provider>
    )
}

