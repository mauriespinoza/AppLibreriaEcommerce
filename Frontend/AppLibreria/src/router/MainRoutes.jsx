import { Route, Routes } from "react-router-dom"
import { NavBar } from '../components/navbar/NavBar';
import { HomePage } from '../views/pages/HomePage'
import {Products} from '../views/pages/Products';
import { ProductByCategorie } from "../views/pages/ProductByCategorie";
import { ProductDetails } from "../components/products/ProductDetails";
import { LoginForm } from "../views/pages/LoginForm";
// import {ProductosProvider} from '../context/ProductosContext'
// import {CategorieProvider} from '../context/CategorieContext'


export const MainRoutes = () => {
    return (
      <>
      {/* <ProductosProvider> */}
      {/* <CategoriesProvider> */}
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:categorie" element={<ProductByCategorie />} />
          <Route path="/productosbyid/:id" element={<ProductDetails />} />
          <Route path="/login/" element={<LoginForm />} />
          <Route path="*" element={<h1>Error 404 - Ruta no encontrada</h1>} />
        </Routes>
        {/* </CategoriesProvider> */}
        {/* </ProductosProvider> */}
      </>
    );
}