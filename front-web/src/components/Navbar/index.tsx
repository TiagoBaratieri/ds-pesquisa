import { ReactComponent as Logo } from "assets/logo.svg";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <Logo />
      <div className="logo-text">
        <span className="logo-text-1">Big Game</span>
        <span className="logo-text-2">Survey</span>
      </div>
    </nav>
  );
};

export default Navbar;
