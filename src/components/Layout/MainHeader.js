import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import HeaderCartButton from "./HeaderCartButton";
import { Fragment } from "react";

function MainHeader(props) {
  return (
    <Fragment>
    <Navbar collapseOnSelect expand="lg" bg="none" variant="white">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#home">Online Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
              <Nav.Link>Our Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <HeaderCartButton onClick={props.onShowCart} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>
  );
}

export default MainHeader;
