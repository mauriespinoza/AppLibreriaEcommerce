import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { axiosClient } from "../../config/api";
// import "./productCard.css";
export const ProductCard = () => {
  const [product, setProduct] = useState([]);

  //obtenemos las categorias desde la BD
  const getProducts = async () => {
    try {
      const response = await axiosClient.get("/products");
      console.log(response);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
//funcion para mostrar en formato de moneda
function FormatCLP(price) {
    return new Intl.NumberFormat().format(price);
  }
  return (
    <>
      <div className="card-prod">
        <h2>{}</h2>
        <Row xs={1} md={4} className="g-4">
          {product.map((producto, index) => (
            <Col key={index}>
              <Card className="container-img">
                <div className="container-img"></div>
                <Card.Img src={producto.imagen} />
                <Card.Body>
                  <Card.Text className="card-text">
                    <strong>{producto.descripcion}</strong>
                  </Card.Text>
                  <div className="text-center">
                    <Button variant="danger">{"$" + FormatCLP(producto.valor)}</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
