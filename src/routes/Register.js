import Button from "react-bootstrap/Button";
import Modal from "../UI/Modal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Register = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <Form>
        <h2 style={{ marginBottom: 20 }}>Create an Account</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password Confirmation" />
        </Form.Group>
        <div style={{ marginBottom: 10 }}>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>{" "}
          <Button onClick={props.onClose} variant="danger" type="submit">
            Close
          </Button>{" "}
        </div>
        <p>
          Already have an account?{" "}
          <span>
            <Link onClick={props.onShowLogin}>Login Here</Link>
          </span>
        </p>
      </Form>
    </Modal>
  );
};

export default Register;
