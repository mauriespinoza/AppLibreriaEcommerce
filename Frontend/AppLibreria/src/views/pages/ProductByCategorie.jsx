import {  useEffect } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";

import { Pagination } from "../../components/card/Pagination";
import { useProduct } from "../../hooks/useProduct";
import { Footer } from "../../components/footer/Footer";
import { Products } from "../../components/products/Products";
export const ProductByCategorie = () => {
  const { categorie } = useParams();
  const { getProductByCategory } = useProduct();
  useEffect(() => {
    getProductByCategory(categorie);
  }, [categorie]);
  return (
    <>
      <>
        <div className="card-container">
          <Row className="g-4" xs={1} md={4}>
            <Products />
          </Row>
        </div>
        <Pagination />
      </>
      <Footer />
    </>
  );
};
