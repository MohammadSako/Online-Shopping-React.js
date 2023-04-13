import Container from "react-bootstrap/Container";
import ProductList from "../components/ProductsItem/ProductList";
import CarouselComponent from "../components/UI/Carousel";

const OurProducts = () => {
  return (
    <Container>
      <CarouselComponent />
      <ProductList />
    </Container>
  );
};
export default OurProducts;
