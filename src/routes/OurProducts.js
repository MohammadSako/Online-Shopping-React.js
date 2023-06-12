import Container from "react-bootstrap/Container";
import ProductList from "../components/ProductsItem/ProductList";
import CarouselComponent from "../components/UI/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { cartActions } from "../store/cart-slice";

const OurProducts = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = useSelector((state) => state.cart.totalQuantity);

  const [cartEmpty, setCartEmpty] = useState(false);
  useEffect(() => {
    dispatch(cartActions.totalAllItems());
    if (totalItems === 0) {
      setCartEmpty(false);
      localStorage.clear("items")
    } if (totalItems > 0) {
      setCartEmpty(true);
    }
  }, [cartItems, totalItems, dispatch]);

  return (
    <Container>
      <CarouselComponent />
      <ProductList />
    </Container>
  );
};
export default OurProducts;
