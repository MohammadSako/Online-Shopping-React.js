import { useSelector } from "react-redux";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { Row } from "react-bootstrap";
const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

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
    </Modal>
  );
};
export default Cart;
