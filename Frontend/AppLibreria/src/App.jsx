
// import { NavBar } from './components/navbar/NavBar';
import { MainRoutes } from './router/MainRoutes';
// import {DropdownList} from "./components/dropdownlist/DropdownList";
import { CategorieState } from './context/CategorieState';
import {ProductState} from './context/ProductState'
// import { Footer } from './components/footer/Footer';
import './App.css'

function App() {


  return (
    <>
      {/* <NavBar/> */}
      <CategorieState>
        <ProductState>
      <MainRoutes/>
      </ProductState>
      </CategorieState>
      {/* <DropdownList/> */}
      {/* <Footer/> */}
      
    </>
  )
}

export default App
