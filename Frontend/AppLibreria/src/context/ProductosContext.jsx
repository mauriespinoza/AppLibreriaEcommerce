import { createContext, useReducer, useState, useEffect } from "react";
import { cartReducer, cartInitialState } from "../reducer/cartReducer";
import { axiosClient } from "../config/api";

export const ProductosContext = createContext();

const useCartReducer = () => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);
  console.log("cartState: " + JSON.stringify(cartState));
  const addToCart = (product) =>
    cartDispatch({
      type: "ADD_ITEMS_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    cartDispatch({
      type: "REMOVE_ITEMS_CART",
      payload: product,
    });

  return { cartState, addToCart, removeFromCart };
};


export const ProductosProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [product,setProduct] =useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countProduct, setCountProduct] = useState(1);
  const [count,setCount] = useState(1);
  const { cartState, addToCart, removeFromCart } = useCartReducer();

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

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartState) ?? []);
    console.log(localStorage.getItem("cartItems"));
  }, [cartState]);

  return (
    <ProductosContext.Provider
      value={{ 
        products, 
        getProductByCategory, 
        getProductById , 
        product, 
        currentPage, 
        setCurrentPage,
        addToCart,
        removeFromCart,
        cart: cartState, 
        count,
        setCount,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};
