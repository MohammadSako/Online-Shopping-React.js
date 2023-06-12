import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RootLayout from "./routes/Rootlayout";
import Home from "./routes/Home";
import OurProducts from "./routes/OurProducts";
import ContactUs from "./routes/ContactUs";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart/Cart";
import CartPage from "./routes/CartPage";
import { Provider } from "react-redux";
import store from "./store/index";
import Checkout from "./routes/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <OurProducts />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/cartpage",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} basename="/" />
    </Provider>
  </React.StrictMode>
);
