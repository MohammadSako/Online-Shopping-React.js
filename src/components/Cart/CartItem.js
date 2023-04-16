import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { name, quantity, total, price, id, image, discription } = props.item;


  const addItem = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        image,
        total,
        discription,
        quantity,
      })
    );
  };

  const removeItem = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <>
      <Col>
        <Card.Body>
          <Card.Img
            style={{ width: 120 }}
            className="mt-2"
            variant="top"
            src={image}
          />     
        </Card.Body>
      </Col>
      <Col>
        <Card.Title>
          <span style={{ color: "Red" }}>{name}</span>{" "}
        </Card.Title>
        <Card.Text className="mb-2 text-muted">
          {quantity} X <span style={{ color: "Red" }}>({price.toFixed(2)} JD /item)</span>
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
        <h5 className="text-muted">Price: <span style={{ color: "Red" }}>{total.toFixed(2)}</span> JD</h5>
        </Card.Subtitle>
        <ButtonGroup className="me-2">
          <Button onClick={removeItem}>
            <span style={{ fontSize: 15, fontWeight: "bold" }}>-</span>
          </Button>{" "}
          <Button onClick={addItem}>
            <span style={{ fontWeight: "bold", height: 10 }}>+</span>
          </Button>{" "}
        </ButtonGroup>
      </Col>
      <hr
        style={{
          margin: "10px 0px 10px 0px",
          border: 0,
          borderTop: "1px solid",
          opacity: 0.25,
        }}
      />
    </>
  );
};

export default CartItem;
