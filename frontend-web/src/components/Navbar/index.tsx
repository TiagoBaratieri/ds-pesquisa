import { ReactComponent as Logo } from "assets/logo.svg";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="nav main-nav-container">
      <div className="logo">
        <Logo />
      </div>
      <Link to="/">
      <div className="logo-text">
        <span className="logo-text-1">Big Game</span>
        <span className="logo-text-2">Survey</span>
      </div>
      </Link>
    </nav>
  );
};

export default Navbar;
