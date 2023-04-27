// import { LinkContainer } from "react-router-bootstrap";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// // import Form from "react-bootstrap/Form";
// import HeaderCartButton from "./HeaderCartButton";
// import { Fragment } from "react";

// const MainHeader = (props) => {
//   return (
//     <Fragment>
//       <Navbar bg="white" expand="md">
//         <Container>
//           <LinkContainer to="/">
//             <Navbar.Brand>Online Shop</Navbar.Brand>
//           </LinkContainer>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="me-auto my-0 my-lg-0"
//               style={{ maxHeight: "100px" }}
//               navbarScroll
//             >
//               <LinkContainer to="/">
//                 <Nav.Link>Home</Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="/products">
//                 <Nav.Link>Our Products</Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="/contact">
//                 <Nav.Link>Contact Us</Nav.Link>
//               </LinkContainer>

//               <Nav.Link onClick={props.onShowLogin}>Login</Nav.Link>

//               <Nav.Link onClick={props.onShowRegister}>Register</Nav.Link>
//             </Nav>
//             {/* <Form className="d-flex">
//               <Form.Control
//                 type="search"
//                 placeholder="Search a product"
//                 className="me-2"
//                 aria-label="Search"
//               />
//             </Form> */}
//             <HeaderCartButton onClick={props.onShowCart} />
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </Fragment>
//   );
// };
// export default MainHeader;

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LinkContainer } from "react-router-bootstrap";
import HeaderCartButton from "./HeaderCartButton";
import { Fragment } from "react";

const MainHeader = (props) => {
  return (
    <Fragment>
      {[false].map((expand) => (
        <Navbar key={expand} bg="white" expand={expand}>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Online Shop</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto" style={{ flexDirection: "inherit" }}>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products" style={{ marginLeft: 10 }}>
                <Nav.Link>Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact" style={{ marginLeft: 10 }}>
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              <Nav.Link onClick={props.onShowLogin} style={{ marginLeft: 10 }}>
                Login
              </Nav.Link>
              <Nav.Link
                onClick={props.onShowRegister}
                style={{ marginLeft: 10 }}
              >
                Register
              </Nav.Link>
              <HeaderCartButton onClick={props.onShowCart} />
            </Nav>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                </Nav>
                <HeaderCartButton onClick={props.onShowCart} />
                <hr />
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </Fragment>
  );
};

export default MainHeader;
