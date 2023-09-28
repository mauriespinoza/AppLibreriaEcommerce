import { useState, useEffect,useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import ProductsContext from "../../context/ProductContext";
import { Pagination } from "../../components/card/Pagination";
import { useProduct } from "../../hooks/useProduct";
import { Footer } from "../../components/footer/Footer";

export const ProductByCategorie = () => {
    const {categorie} = useParams();
    const navigate = useNavigate();
    const {getProductByCategory,products, getProductById} = useProduct()
    //console.log(products)
    //const [products]=useState([]);
    // console.log(products.length);
     const globalContext = useContext(ProductsContext);
  
    //  const {getProductByCategory,products} = globalContext;
    //  console.log(products);
     const totalProducts = products.length;

    // const getProductsCategory = async () => {
    //     const data = await getProductByCategory(categorie);
        
    //     console.log('getProductsByCategory:' + data);
    //     //setProducts(data);
    // }

    const [productsPerPage, setProductsPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
  
    const lastIndex = currentPage * productsPerPage;
    const fisrstIndex = lastIndex - productsPerPage;

    useEffect(() => {
        // getProductsCategory();
        getProductByCategory(categorie)
     }, [categorie]);

     function FormatCLP(price) {
        return new Intl.NumberFormat().format(price);
      }
      const handleChangeProducts = (event) => {
        console.log("handleChangeProducts:" + event);
        // setSelectedValue(categorie);
      };
  return (
    <>
    {/* <div>Hola bootcamp Ch7</div>
    <div>{JSON.stringify( categorie)}</div> */}
    <>
        <div className="card-container">
          <Row className="g-4" xs={1} md={4}>
            {products
              .map((product) => (
                <div className="card" key={product._id}>
                  <figure className="figure">
                    
                    <img src={product.imagen} alt={product.descripcion} onClick={()=> {getProductById( product._id),navigate(`/productosbyid/${product._id}`)}}/>
                  </figure>
                  <div className="card-body">
                    <h4 className="card-title">{product.nombre}</h4>
                    <h4 className="price">
                      {" "}
                      <strong>${FormatCLP(product.valor)}</strong>
                    </h4>
                   
                    <Link className="dropdown-item" to={`/productosbyid/${product._id}`}  >
                    <button className="btn btn-primary">Añadir al Carrito</button>
                      </Link>
                  </div>
                </div>
              ))
              .slice(fisrstIndex, lastIndex)}
          </Row>
        </div>
        <Pagination
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={totalProducts}
        />
      </>
      <Footer/>
    </>
    
    
  )
}
