import { ReactComponent as Logo } from "assets/logo.svg";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <div className="nav-logo-text">
        <div className="logo-image">
          <Logo />
        </div>
        <h4>Big Game Survey</h4>
      </div>
    </nav>
  );
};

export default Navbar;
