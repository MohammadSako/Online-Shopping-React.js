import { Link } from "react-router-dom";
import Classes from "./Home.module.css";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div className={Classes.home}>
      <h1>Online Shop</h1>
      <p>Welcome to Online Shop</p>
      <p>Jump right in and explore our many fresh products.</p>

      <Link to="/products">
        <Button className={Classes.homeButton} variant="light">Go Shopping</Button>{" "}
      </Link>
    </div>
  );
};
export default Home;
