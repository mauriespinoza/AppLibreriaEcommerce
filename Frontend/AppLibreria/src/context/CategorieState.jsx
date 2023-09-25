import {useReducer} from 'react';
import CategoriesContext from './CategorieContext';
import {categorieReducer} from './CategorieReducer';
import { axiosClient } from '../config/api';
export const CategorieState = ({children}) => {

  //const [categoriesState, setCategoriesState] = useState([]);
    const initialState = {
        categories:[],
    }
    // console.log("children: " + JSON.stringify(children))
    const [globalState, dispatch] = useReducer(categorieReducer, initialState)

    //obtenemos las categorias desde la BD
  const getCategories = async () => {
    try {
      const response = await axiosClient.get("/categories");
      // console.log(`getCategories.response: ${response}`);
      console.log("getCategories: " + JSON.stringify(response));
      // setCategoriesState(response.data);
      dispatch({
        type: "GETS_CATEGORIES",
        payload: response.data
    });
    return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CategoriesContext.Provider
        value={{
          categories: globalState.categories,
            getCategories
        }}>
    {children}</CategoriesContext.Provider>
  )
}
