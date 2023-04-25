import { useState } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/Layout/MainHeader";
import Cart from "../components/Cart/Cart";
import Login from "../components/Login";
import Register from "../components/Register";
import Footer from "../components/Layout/Footer";

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
  // useReducer here..
  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {loginIsShown && <Login onClose={hideLoginHandler} />}
      {registerIsShown && <Register onClose={hideRegisterHandler} />}
      <MainHeader
        onShowCart={showCartHandler}
        onShowLogin={showLoginHandler}
        onShowRegister={showRegisterHandler}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
