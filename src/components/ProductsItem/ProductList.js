import Cards from "../UI/Cards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductList = () => {
  const Products = [
    {
      id: "p1",
      title: "Orange",
      image: "/images/orange.jpg",
      price: 1.50,
      discription: "Fresh Orange",
    },
    {
      id: "p2",
      title: "Apple",
      image: "/images/apple.jpg",
      price: 1.25,
      discription: "Fresh Apple",
    },
    {
      id: "p3",
      title: "milk",
      image: "/images/milk.jpg",
      price: 1.10,
      discription: "Fresh Pineapple",
    },
    {
      id: "p4",
      title: "Strawberry",
      image: "/images/strawberry.jpg",
      price: 2.50,
      discription: "Fresh Strawberry",
    },
    {
      id: "p5",
      title: "Banana",
      image: "/images/banana.jpg",
      price: 1.00,
      discription: "Fresh Banana",
    },
    {
      id: "p6",
      title: "Mango",
      image: "/images/mango.jpg",
      price: 3.00,
      discription: "Fresh Mango",
    },
    {
      id: "p7",
      title: "Onion",
      image: "/images/onion.jpg",
      price: 0.40,
      discription: "Fresh Onion",
    },
    {
      id: "p8",
      title: "Pasion Fruit",
      image: "/images/pasion fruit.jpg",
      price: 1.25,
      discription: "Pasion Fruit",
    },
    {
      id: "p9",
      title: "Red Beans",
      image: "/images/red beans.jpg",
      price: 0.60,
      discription: "Fresh Red Beans",
    },
    {
      id: "p10",
      title: "Red Berries",
      image: "/images/redberries.jpg",
      price: 2,
      discription: "Fresh Red Berries",
    },
    {
      id: "p11",
      title: "Tomato",
      image: "/images/tomato.jpg",
      price: 0.50,
      discription: "Fresh Tomato",
    },
    {
      id: "p12",
      title: "Yogourt",
      image: "/images/yogourt.jpg",
      price: 1.00,
      discription: "Fresh Yogourt",
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
              price={product.price}
              discription={product.discription}
            />
          </Col>
        ))}
      </Row>
    </ul>
  );
};
export default ProductList;
