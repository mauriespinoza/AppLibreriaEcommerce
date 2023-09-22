import  {ProductCard} from '../../components/card/ProductCard.jsx';
import {Footer}from '../../components/footer/Footer.jsx'
import {ProductList} from '../../components/card/ProductList.jsx';
import {Jumbotron} from '../../components/jumbotron/Jumbotron.jsx';
export const HomePage = () => {
  return (
    <>
      {/* <ProductCard/> */}

      <Jumbotron/>
     <ProductList />

      <Footer/>
    </>
  );
};
