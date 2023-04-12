import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "../UI/Modal";
import ListGroup from "react-bootstrap/ListGroup";

const Login = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Login In</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to="/">
            <Button variant="light" onClick={props.onClose}>Close</Button>{" "}
          </Link>
        </Card.Body>
      </Card>
    </Modal>
  );
};

export default Login;
