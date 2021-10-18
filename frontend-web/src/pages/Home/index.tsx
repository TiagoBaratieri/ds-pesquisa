import { ReactComponent as Gamer } from "assets/gamer.svg";
import ButtonIcon from "components/ButtonIcon";
import { Link } from "react-router-dom";
import './styles.css';


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-content-container">
          <div>
            <h1>Quais jogos a galera gosta mais?</h1>
            <p>
              Clique no botão abaixo e saiba quais são os jogos que os gamers
              estão escolhendo!
            </p>
          </div>
          <Link to="/records">
            <div>
              <ButtonIcon />
            </div>
          </Link>
        </div>
        <div className="home-image-container">
          <Gamer />
        </div>
      </div>
    </div>
  );
};

export default Home;
