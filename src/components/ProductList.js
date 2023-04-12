import Cards from "./Cards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductList = () => {
  const Products = [
    {
      id: "p1",
      title: "Orange",
      image: "/images/orange.jpg",
      discription: "Fresh Orange",
    },
    {
      id: "p2",
      title: "Apple",
      image: "/images/orange.jpg",
      discription: "Fresh Apple",
    },
    {
      id: "p3",
      title: "Pineapple",
      image: "/images/orange.jpg",
      discription: "Fresh Pineapple",
    },
    {
      id: "p4",
      title: "Strawberry",
      image: "/images/orange.jpg",
      discription: "Fresh Strawberry",
    },
    {
      id: "p5",
      title: "Banana",
      image: "/images/orange.jpg",
      discription: "Fresh Banana",
    },
    {
      id: "p6",
      title: "Mango",
      image: "/images/orange.jpg",
      discription: "Fresh Mango",
    },
  ];

  return (
    <ul>
      <Row>
        {Products.map((product) => (
          <Col sm>
            <Cards
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              discription={product.discription}
            />
          </Col>
        ))}
      </Row>
    </ul>
  );
};
export default ProductList;
