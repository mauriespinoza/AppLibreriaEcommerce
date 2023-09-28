
// import { NavBar } from './components/navbar/NavBar';
import { MainRoutes } from './router/MainRoutes';
// import {DropdownList} from "./components/dropdownlist/DropdownList";
import { CategorieState } from './context/CategorieState';
import {ProductState} from './context/ProductState'
// import { Footer } from './components/footer/Footer';
import './App.css'
import { ProductosProvider } from './context/ProductosContext';

function App() {


  return (
    <>
      {/* <NavBar/> */}
      <ProductosProvider>
      <CategorieState>
        <ProductState>
      <MainRoutes/>
      </ProductState>
      </CategorieState>
      </ProductosProvider>
      {/* <DropdownList/> */}
      {/* <Footer/> */}
      
    </>
  )
}

export default App
