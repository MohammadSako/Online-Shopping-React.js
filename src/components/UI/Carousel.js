import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  return (
    <Carousel fade style={{margin: "15px 0 15px" }}>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/1ff.jpg" alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/1vv.jpg" alt="Second slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/2ff.jpg" alt="Third slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselComponent;
