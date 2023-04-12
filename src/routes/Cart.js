import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "../UI/Modal";

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <Card style={{ width: "30rem", margin: "auto" }}>
        <Card.Body>
          <Card.Title>Cart</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>Some quick example</Card.Text>
          <Button variant="light" onClick={props.onClose}>
            close
          </Button>{" "}
          <Link to="/">
            <Button variant="light">Order</Button>{" "}
          </Link>
        </Card.Body>
      </Card>
    </Modal>
  );
};

export default Cart;
