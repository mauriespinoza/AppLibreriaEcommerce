import {useReducer,useState} from 'react';
import CategoriesContext from './CategoriesContext';
import {reducer} from './CategorieReducer';
import { axiosClient } from '../config/api';
export const CategorieState = ({children}) => {

  const [categoriesState, setCategoriesState] = useState([]);
    const initialState = {
        categories:[
            {
                id: 0,
                name:'Oficina',
                description: 'Oficina',
                img:'https://res.cloudinary.com/dxy1spfug/image/upload/c_scale,h_310/v1694903189/Arte/qenicx5ukvszhxyenydg.webp'
            }
        ]
    }
    // console.log("children: " + JSON.stringify(children))
    const [globalState, dispatch] = useReducer(reducer, initialState)

    //obtenemos las categorias desde la BD
  const getCategories = async () => {
    try {
      const response = await axiosClient.get("/categories");
      // console.log(`getCategories.response: ${response}`);
      console.log("getCategories: " + JSON.stringify(response));
      setCategoriesState(response.data);
      dispatch({
        type: "GETS_CATEGORIES",
        payload: response.data
    })
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // <CategoriesContext.Provider
    //     value={{
    //       categoriesData: globalState.categories,
    //         getCategories
    //     }}>
    // {children}</CategoriesContext.Provider>
    <CategoriesContext.Provider
        value={{
          categoriesData: categoriesState,
            getCategories
        }}>
    {children}</CategoriesContext.Provider>
  )
}
