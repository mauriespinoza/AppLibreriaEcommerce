import { useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";
export const useProduct =()=>{
    const context = useContext(ProductosContext);
    if(!context){
        throw new Error('context no existe');
    }
    return context;
}