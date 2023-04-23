import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./HeaderCartButton.module.css";
import Badge from "react-bootstrap/Badge";
import { BsCart3 } from "react-icons/bs";

const HeaderCartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  
  
  //cart Bump when clicked
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (cartQuantity.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartQuantity]);


  return (
    <div
      className={btnClasses}
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
    >
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
