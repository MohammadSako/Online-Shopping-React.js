import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { name, quantity, total, price, id, image } = props.item;

  const addItem = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        image,
        total
      })
    );
  };

  const removeItem = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h4>{name}</h4>
        <img style={{width:70}} src={image} alt="" />
        <div className={classes.price}>
          JD {total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItem}>-</button>
          <button onClick={addItem}>+</button>
        </div>
      </div>
    </li>

  );
};

export default CartItem;
