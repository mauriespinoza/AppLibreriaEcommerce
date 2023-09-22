import { Route, Routes } from "react-router-dom"
import { NavBar } from '../components/navbar/NavBar';
import { HomePage } from '../views/pages/HomePage'
import {Products} from '../views/pages/Products';
// import { Footer } from "../components/footer/Footer"
//  import { Contacto } from '../views/pages/Contacto'
// import { Menu } from "../views/pages/Menu";
// import { Reservas } from "../views/pages/Reservas";
// import { Blog } from "../views/pages/Blog";
// import { AdministrarReservas } from "../views/pages/AdministrarReservas";
// import { Login } from "../views/pages/Login";
export const MainRoutes = () => {
    return (
      <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<Products />} />
          <Route path="*" element={<h1>Error 404 - Ruta no encontrada</h1>} />
        </Routes>
        
      </>
    );
}