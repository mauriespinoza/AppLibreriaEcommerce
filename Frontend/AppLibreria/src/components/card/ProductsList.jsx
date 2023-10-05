import { useState, useEffect, useContext } from "react";
import { axiosClient } from "../../config/api";
import Row from "react-bootstrap/Row";
import { Pagination } from "../../components/card/Pagination";
import "./productList.css";
import ProductsContext from "../../context/ProductContext";
import { useProduct } from "../../hooks/useProduct";
export const ProductsList = () => {
    const [products, setProducts]=useState([]);

    // console.log(products.length);
     const globalContext = useContext(ProductsContext);
  
     const {getProducts} = globalContext;
     
    const totalProducts = products.length;

    const getAllProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    }
  
    const [productsPerPage, setProductsPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
  
    const lastIndex = currentPage * productsPerPage;
    const fisrstIndex = lastIndex - productsPerPage;
    //obtenemos las categorias desde la BD
    // const getProducts = async () => {
    //   try {
    //     const response = await axiosClient.get("/products");
    //     console.log(response);
    //     setProducts(response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    useEffect(() => {
       getAllProducts();
    }, []);
    function FormatCLP(price) {
      return new Intl.NumberFormat().format(price);
    }
    return (
      <>
        <div className="card-container">
          <Row className="g-4" xs={1} md={4}>
            {products
              .map((product) => (
                <div className="card" key={product._id}>
                  <figure className="figure">
                    <img src={product.imagen} alt={product.descripcion} />
                  </figure>
                  <div className="card-body">
                    <h4 className="card-title">{product.nombre}</h4>
                    <h4 className="price">
                      {" "}
                      <strong>${FormatCLP(product.valor)}</strong>
                    </h4>
                    <button className="btn btn-primary">Añadir al Carrito</button>
                  </div>
                </div>
              ))
              .slice(fisrstIndex, lastIndex)}
          </Row>
        </div>
        <Pagination/>
      </>
    );
  };
  