import { useState, useEffect } from "react";
import { axiosClient } from "../../config/api";
// import {Dropdown} from 'react-bootstrap/Dropdown';
export const DropdownList = () => {
  const [categories, setCategories] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  //obtenemos las categorias desde la BD
  const getCategories = async () => {
    try {
      const response = await axiosClient.get("/categories");
      console.log(response);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  const handleChangeCategories = (e) => {
    console.log(e.target.value);
    setSelectedValue(e.target.value);
  };
  return (
    <>
      <select onChange={handleChangeCategories}>
        <option value="" />
        {categories.map((categorie, index) => {
          return <option key={index} value={categorie}></option>;
        })}
      </select>

      {/* <select onChange={handleChangeCategories} className="nav-item dropdown">
                <option value="" className="nav-link dropdown-toggle" />
                {categories.map((categorie, index) => {
                  return (
                    <option key={index} value={categorie.name} className="nav-link dropdown-toggle">
                      {categorie.name}
                    </option>
                  );
                })}
      </select> */}
 
    </>
  );
};
