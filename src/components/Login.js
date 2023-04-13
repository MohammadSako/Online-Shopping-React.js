import Button from "react-bootstrap/Button";
import Modal from "./UI/Modal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <Form>
        <h2 style={{ marginBottom: 20 }}>Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div style={{ marginBottom: 10 }}>
          <Button variant="primary" type="submit">
            Login
          </Button>{" "}
          <Button onClick={props.onClose} variant="danger" type="submit">
            Close
          </Button>{" "}
        </div>
        <p>
          Don't have an account yet?{" "} 
          <Link onClick={props.onShowRegister} >Register Here</Link>
        </p>
      </Form>
    </Modal>
  );
};

export default Login;
