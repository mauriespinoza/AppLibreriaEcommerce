import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { CategorieState } from './context/CategorieState';
import {ProductState} from './context/ProductState.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategorieState>
  <ProductState>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </ProductState>
  </CategorieState>
</React.StrictMode>,
)
