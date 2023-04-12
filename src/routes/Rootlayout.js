import { useState } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import CartProvider from "../store/cartProvider";
import Cart from "../routes/Cart";
import Login from "./Login";
import Register from "./Register";
// import Footer from "../components/Footer";

const RootLayout = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [loginIsShown, setLoginIsShown] = useState(false);
  const [registerIsShown, setRegisterIsShown] = useState(false);

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

  const showRegisterHandler = () => {
    setRegisterIsShown(true);
  };
  const hideRegisterHandler = () => {
    setRegisterIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {loginIsShown && <Login onClose={hideLoginHandler} />}
      {registerIsShown && <Register onClose={hideRegisterHandler} />}
      <MainHeader onShowCart={showCartHandler} onShowLogin={showLoginHandler} onShowRegister={showRegisterHandler} />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </CartProvider>
  );
};

export default RootLayout;
