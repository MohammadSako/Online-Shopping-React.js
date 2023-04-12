import { BsCart3 } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div style={{ cursor: "pointer" }} onClick={props.onClick}>
      <BsCart3 size={25} color="#757686" />
      <Badge
        bg="primary"
        style={{
          borderRadius: 15,
          marginLeft: -8,
          marginTop: -10,
          position: "absolute",
        }}
      >
        {numberOfCartItems}
      </Badge>
    </div>
  );
};
export default HeaderCartButton;
