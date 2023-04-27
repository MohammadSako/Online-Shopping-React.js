import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Classes from "./Footer.module.css";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container className={Classes.container}>
      <Row className={Classes.row}>
        <Col lg={3} sm={6}>
          <h6>Online Shop</h6>
          <ul>
            <li>About Us</li>
            <li>News</li>
            <li>Green Basket</li>
            <li>Terms and Conditions</li>
            <li>Careers At Shopping Market</li>
          </ul>
        </Col>
        <Col lg={3} sm={6}>
          <h6>Customer service</h6>
          <ul>
            <li>About service</li>
            <li>Return policy</li>
            <Link to="/contact">
              <li>Contact us</li>
            </Link>
            <li>FAQs</li>
            <li>Feedback</li>
          </ul>
        </Col>
        <Col lg={3} sm={6}>
          <h6>Usefull links</h6>
          <ul>
            <li>Online Shopping Business</li>
            <li>Online Shopping Family</li>
            <li>Online Shopping Resturant</li>
            <li>Online Shopping Stores</li>
          </ul>
        </Col>
        <Col lg={3} sm={6}>
          <h6>General information</h6>
          <ul>
            <li>Product support</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
            <li>Cookie settings</li>
          </ul>
        </Col>
      </Row>
      <Row style={{ margin: "20px 0 20px 0" }}>
        <Col md={7}>
          <Row>
            <Col>
              <p>
                <AiFillFacebook size={30} />
              </p>
            </Col>
            <Col>
              <p>
                <AiFillInstagram size={30} />
              </p>
            </Col>
            <Col>
              <p>
                <AiFillTwitterCircle size={30} />
              </p>
            </Col>
            <Col>
              <p>
                <AiFillYoutube size={30} />
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row>
        <p>By: Mohammad Talal Murad Al Shishani 2023</p>
      </Row>
    </Container>
  );
};
export default Footer;
