import Container from "react-bootstrap/Container";
import ProductList from "../components/ProductList";
import CarouselComponent from "../components/Carousel";

const OurProducts = () => {
  return (
    <Container>
      <CarouselComponent />
      <ProductList />
    </Container>
  );
};
export default OurProducts;
