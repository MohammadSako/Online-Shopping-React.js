import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Form from "react-bootstrap/Form";
import HeaderCartButton from "./HeaderCartButton";
import { Fragment } from "react";

const MainHeader = (props) => {
  
  return (
    <Fragment>
      <Navbar bg="white" expand="md">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Online Shop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-0 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products">
                <Nav.Link>Our Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>

              <Nav.Link onClick={props.onShowLogin}>Login</Nav.Link>

              <Nav.Link onClick={props.onShowRegister}>Register</Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search a product"
                className="me-2"
                aria-label="Search"
              />
            </Form> */}
            <HeaderCartButton onClick={props.onShowCart} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default MainHeader;
