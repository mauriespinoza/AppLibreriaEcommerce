import { useNavigate,Link } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";

export const Products = () => {
    const {products, getProductById, currentPage,addToCart, count} = useProduct();
    const navigate = useNavigate();

    const lastIndex = currentPage * 4;
    const fisrstIndex = lastIndex - 4;
    function FormatCLP(price) {
        return new Intl.NumberFormat().format(price);
      }
  return (
    <>
      {products
              .map((product) => (
                <div className="card" key={product._id}>
                  <figure className="figure">
                    
                    <img src={product.imagen} style={{cursor:'pointer'}} alt={product.descripcion} onClick={()=> {getProductById( product._id),navigate(`/productosbyid/${product._id}`)}}/>
                  </figure>
                  <div className="card-body">
                    <h4 className="card-title">{product.nombre}</h4>
                    <h4 className="price">
                      {" "}
                      <strong>${FormatCLP(product.valor)}</strong>
                    </h4>
                   
                    <Link className="dropdown-item"   >
                    <button className="btn btn-primary" onClick={() => {addToCart({...product,count})}}>Añadir al Carrito</button>
                      </Link>
                  </div>
                </div>
              ))
              .slice(fisrstIndex, lastIndex)}
    </>
  )
}
