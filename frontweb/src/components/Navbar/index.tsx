import { ReactComponent as Logo } from "assets/logo.svg";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <Link to="/">
        <div className="nav-logo-text">
          <div className="logo-image">
            <Logo />
          </div>
          <h4>Big Game Survey</h4>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
