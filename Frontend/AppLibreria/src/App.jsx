
// import { NavBar } from './components/navbar/NavBar';
import { MainRoutes } from './router/MainRoutes';
// import {DropdownList} from "./components/dropdownlist/DropdownList";
import { CategorieState } from './context/CategorieState';
import {ProductState} from './context/ProductState'
// import { Footer } from './components/footer/Footer';
import './App.css'
import { ProductosProvider } from './context/ProductosContext';
import { AuthProvider } from './context/AuthContext';
function App() {


  return (
    <>
      {/* <NavBar/> */}
      <ProductosProvider>
      <AuthProvider>
      <CategorieState>
        <ProductState>
      <MainRoutes/>
      </ProductState>
      </CategorieState>
      </AuthProvider>
      </ProductosProvider>
      {/* <DropdownList/> */}
      {/* <Footer/> */}
      
    </>
  )
}

export default App
