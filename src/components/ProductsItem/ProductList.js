import Cards from "../UI/Cards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
// import { MongoClient } from "mongodb";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://react-http2-d9752-default-rtdb.firebaseio.com/fruits.json"
      );
      if (!response.ok) {
        throw new Error("Error has been Occur!!");
      }
      const responseData = await response.json();
      const loadedProducts = [];

      for (const key in responseData) {
        loadedProducts.push({
          id: key,
          title: responseData[key].title,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
        });
      }
      setProducts(loadedProducts);
      setIsLoading(false);
    };
    fetchProducts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }
  if (httpError) {
    return (
      <section>
        <h2>{httpError}</h2>
      </section>
    );
  }

  return (
    <Row>
      {products.map((product) => (
        <Col lg={3}>
          <Cards
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
