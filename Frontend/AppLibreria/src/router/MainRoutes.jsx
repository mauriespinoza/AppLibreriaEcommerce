import { Route, Routes } from "react-router-dom"
import { NavBar } from '../components/navbar/NavBar';
import { HomePage } from '../views/pages/HomePage'
import {Products} from '../views/pages/Products';
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
          <Route path="*" element={<h1>Error 404 - Ruta no encontrada</h1>} />
        </Routes>
        {/* </CategoriesProvider> */}
        {/* </ProductosProvider> */}
      </>
    );
}