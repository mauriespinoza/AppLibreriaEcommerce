import {useReducer,useState} from 'react';
import ProductsContext from './ProductsContext'
import {reducer} from './ProductReducer';
import { axiosClient } from '../config/api';
export const ProductState = ({children}) => {
    const [productsState, setProductsState] = useState([]);

    // console.log("children: " + JSON.stringify(children))
    const [dispatch] = useReducer(reducer);
        //obtenemos los productos desde la BD
  const getProducts = async () => {
    try {
      const response = await axiosClient.get("/products");
      // console.log(`getCategories.response: ${response}`);
      console.log("getProducts: " + JSON.stringify(response));
      setProductsState(response.data);
      dispatch({
        type: "GETS_PRODUCTS",
        payload: response.data
    })
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ProductsContext.Provider
        value={{
          productsData: productsState,
            getProducts
        }}>
    {children}</ProductsContext.Provider>
  )
}
