import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cartActions } from "../store/cart-slice";
import CartItem from "../components/Cart/CartItem";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";

const Checkout = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAllPrices = useSelector((state) => state.cart.totalAllPrice);

  //SubTotal
  useEffect(() => {
    dispatch(cartActions.totalAllItems());
  }, [cartItems, dispatch]);

  return (
    <Container>
      <h1>Checkout</h1>
      <Row>
        <Col md={{ span: 5, offset: 1 }} style={{marginBottom:20}} >
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                name: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
                image: item.image,
                discription: item.discription,
              }}
            />
          ))}
        </Col>
        <Col md={{ span: 5, offset: 1 }} style={{marginBottom:20}} >
          <h5>Order Summary</h5>
          <Row>
            <Col>Products</Col>
            <Col>{totalAllPrices} JD</Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <h5>Subtotal incl. VAT</h5>
            </Col>
            <Col>
              <h3>{totalAllPrices} JD</h3>
            </Col>
            <p>By clicking "check out" you're agreeing to our Privacy Policy</p>
            <Button
              style={{ borderRadius: 25, padding: "0.5rem, 2rem", marginBottom:20 }}
              variant="outline-primary"
            >
              Checkout
            </Button>
            <p><TbTruckReturn  size={25}/> 90 days to change your mind</p>
            <p><RiSecurePaymentLine size={25}/> Secure shopping with SSL encryption</p>
          </Row>
          <Button
            style={{ borderRadius: 25, padding: "0.5rem, 2rem" }}
            variant="outline-primary"
          >
            Back
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
