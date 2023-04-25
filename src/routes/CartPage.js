import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cartActions } from "../store/cart-slice";
import CartItem from "../components/Cart/CartItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Classes from "./CartPage.module.css";
import OrderSummary from "../components/Cart/OrderSummary";

const Checkout = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = useSelector((state) => state.cart.totalQuantity);
  //SubTotal
  useEffect(() => {
    dispatch(cartActions.totalAllItems());
  }, [cartItems, dispatch]);

  return (
    <Container className={Classes.container}>
      <div>
        <h2 className={Classes.checkout}>Checkout</h2>
        <p>{totalItems} Items in Total</p>
      </div>
      <Row>
        <Col lg="7">
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
        <Col lg="5">
          <OrderSummary/>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
