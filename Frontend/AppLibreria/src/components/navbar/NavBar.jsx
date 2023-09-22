// import logo from '../../../public/icon-candelabra.jpg';
import { useState, useEffect, useContext } from "react";
import { axiosClient } from "../../config/api";
// import Select from 'react-select';
import "./navbar.css";
import { UserIcon } from "../user/UserIcon";
import CategoriesContext from "../../context/CategoriesContext";
export const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const rol = "admin";

  //obtenemos las categorias desde la BD
  // const getCategories = async () => {
  //   try {
  //     const response = await axiosClient.get("/categories");
  //     console.log(response);
  //     setCategories(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const globalContext = useContext(CategoriesContext);

  const {categoriesData,getCategories} = globalContext;
  // console.log("categoriesData:" + JSON.stringify( categoriesData));
  // console.log("getCategories:" + JSON.stringify( getCategories));
  useEffect(() => {
    getCategories();
  }, []);

  const handleChangeCategories = (categorie) => {
    console.log(categorie);
    setSelectedValue(categorie);
  };
  console.log(categories);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Candelabra
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              {/* <select> 
                <option value="Categorias"> -- Categorias -- </option>
                { 
                  categories.map((categorie,index) => 
                    <option  key={index} value={
                      categorie.description}>
                        </option>)}
              </select> */}
              {/* <Select options={categories} /> */}
              {/* <div className="container">
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <Select 
                        defaultValue={categories}
                        options={categories}
                        onChange={handleChangeCategories}
                        />
                  </div>
                  <div className="col-md-4"></div>
                </div>
              </div> */}
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {categoriesData.map((categoria) => (
                    <li key={categoria.id} >
                      <a className="dropdown-item" href="#" onClick={()=> handleChangeCategories(categoria.description)} >
                        {categoria.description}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              {rol == "admin" ? (
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Escolar
                  </a>
                </li>
              ) : (
                <></>
              )}

              {/* <form className="d-flex" role="search">
              <input  className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form> */}

              {/* <li className="nav-item">
                <a className="nav-link disabled">Deshabilitado</a>
              </li>*/}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
            <div>
              <button className="btn btn-outline-success" type="button">
                Mi Cuenta
                <UserIcon />
              </button>
            </div>
            <div>
              <button className="btn btn-outline-success" type="button">
                Carrito
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
