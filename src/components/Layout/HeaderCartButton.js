import { BsCart3 } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";

const HeaderCartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

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
        {cartQuantity}
      </Badge>
    </div>
  );
};
export default HeaderCartButton;
