import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import Cart from "../routes/Cart";
import { useState } from "react";
import Login from "./Login";
import CartProvider from "../store/cartProvider";
// import Footer from "../components/Footer";

const RootLayout = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [loginIsShown, setLoginIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showLoginHandler = () => {
    setLoginIsShown(true);
  };
  const hideLoginHandler = () => {
    setLoginIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {loginIsShown && <Login onClose={hideLoginHandler} />}
      <MainHeader onShowCart={showCartHandler} onShowLogin={showLoginHandler} />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </CartProvider>
  );
};

export default RootLayout;
