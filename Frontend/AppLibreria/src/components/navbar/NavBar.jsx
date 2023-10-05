import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoriesContext from "../../context/CategorieContext";
import { axiosClient } from "../../config/api";
import "./navbar.css";
import { UserIcon } from "../user/UserIcon";
import { BadgeButton } from "../card/BadgeButton";
import { BadgeButtonUser } from "../badge/BadgeButtonUser";
import {BadgeButtonSearch} from "../badge/BadgeButtonSearch";
export const NavBar = () => {
  const [categories, setCategories] = useState([]);

  const globalContext = useContext(CategoriesContext);

  const { getCategories } = globalContext;

  const rol = "admin";

  const getAllCategories = async () => {
    const data = await getCategories();
    console.log("getAllCategories: " + JSON.stringify(data))
    setCategories(data);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const handleChangeCategories = (categorie) => {
    console.log(categorie);
  };

  // console.log(categories);

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
                <a className="nav-link active" aria-current="page" href="/">
                  Inicio
                </a>
              </li>
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
                  {categories.map((categoria) => (
                    <li key={categoria._id}>
                      <Link
                        className="dropdown-item"
                        to={`/productos/${categoria._id}`}
                        onClick={() =>
                          handleChangeCategories(categoria.description)
                        }
                      >
                        {categoria.description}
                      </Link>
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
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              {/* <button className="btn btn-outline-success" type="submit">
                Buscar
              </button> */}
              <BadgeButtonSearch />
            </form>
            <div>
              {/* <button className="btn btn-outline-success" type="button">
                Mi Cuenta

                
              </button> */}
              <BadgeButtonUser />
            </div>
            <div>
              {/* <button className="btn btn-outline-success" type="button">
                Carrito
              </button> */}
              <BadgeButton numprod={1}/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
