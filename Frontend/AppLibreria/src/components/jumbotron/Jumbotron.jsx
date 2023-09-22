import { useState, useEffect } from "react"
import { Carousel } from "react-bootstrap";
import { axiosClient } from "../../config/api";

import './jumbotron.css'
 export const Jumbotron = () => {
  const [ imagenes, setImagenes ] = useState([]);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    
    const getImagenes = async () => {
        try {
            const response = await axiosClient.get("/categories");
            console.log(response);
            setImagenes(response.data);
          } catch (error) {
            console.log(error);
          }
      
  };
  useEffect(() => {
    getImagenes()
  }, []);
  return (
    <>
    <div id="jumbotron_">
      <Carousel activeIndex={index} onSelect={handleSelect}>
      { imagenes.map((slide, i) => {
        return (
        <Carousel.Item key={i} className="carousel-item">
          <img
            // className="d-block w-100"
            className="w-100 p-10"
            src={slide.img}
            alt={slide.nombre}
          />
          <Carousel.Caption>
            <h3>{slide.nombre}</h3>
            <p>{slide.descripcion}</p>
          </Carousel.Caption>
        </Carousel.Item>
        )
      })}
      </Carousel>
    </div>
    </>
  );
}
