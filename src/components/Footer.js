import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h6>Grocery Shop</h6>
          <ul>
            <li>About Us</li>
            <li>News</li>
            <li>Green Basket</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Careers At Shopping Market</li>
          </ul>
        </Col>
        <Col>
          <h6>Help</h6>
          <ul>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Vendor Connect</li>
          </ul>
        </Col>
        <Col>
          <h6>Download Our App</h6>
        </Col>
        <Col>
          <h6>SOCIAL</h6>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
