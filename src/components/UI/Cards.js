import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const Cards = (props) => {
  const { title, price, description, id, image } = props;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        description,
        image,
      })
    );
  };

  return (
    <Card style={{ width: "18rem", margin: "20px 0 20px 0",boxShadow: "0px 0px 15px 0px #dcd6ce" }}>
      <Card.Img style={{ padding: 20, minHeight:300, maxHeight:300 }} variant="top" src={props.image} />
      <Card.Body style={{ margin: "auto" }}>
        <Card.Title as="h4">{props.title}</Card.Title>
        <Card.Title as="h4" style={{ color: "red" }}>
          {price} JD
        </Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button
          style={{ width: 250 }}
          variant="primary"
          onClick={addToCartHandler}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
