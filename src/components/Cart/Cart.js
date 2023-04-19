import { useDispatch, useSelector } from "react-redux";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { Row } from "react-bootstrap";
import { useEffect } from "react";
import { cartActions } from "../../store/cart-slice";

const Cart = (props) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const totalAllPrices = useSelector((state) => state.cart.totalAllPrice)
  console.log(totalAllPrices);

  useEffect(() => {
    dispatch(cartActions.totalAllItems());
  }, [cartItems, dispatch]);

  return (
    <Modal onClose={props.onClose}>
      <h2>Cart Items</h2>

      <Row>
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
      </Row>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
      <h3>Total: {totalAllPrices.toFixed(2)} JD</h3>
    </Modal>
  );
};
export default Cart;
