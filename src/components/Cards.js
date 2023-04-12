import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cards = (props) => {
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <Card style={{ width: "12rem", marginBottom: "20px" }}>
      <Card.Img style={{ padding: 10 }} variant="top" src={props.image} />
      <Card.Body style={{ margin: "auto" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.discription}</Card.Text>

        <Button variant="primary" ref={amountInputRef} onClick={submitHandler}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
