import { ReactComponent as ArrowIcon } from "assets/arrow.svg";
import "./styles.css";
const ButtonIcon = () => {
  return (
    <div className="btn-container">
    <button className="btn btn-secondary">
      <h6>QUERO SABER QUAIS SÃO</h6>
    </button>
    <div className="btn-icon-container">
      <ArrowIcon />
    </div>
  </div>
  
  );
};

export default ButtonIcon;
