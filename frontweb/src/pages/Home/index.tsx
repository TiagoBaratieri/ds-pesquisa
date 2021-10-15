import { ReactComponent as Gamer } from "assets/mainImage.svg";
import ButtonIcon from "components/ButtonIcon";
import Navbar from "components/Navbar";
import "./styles.css";

const Home = () => {
  return (
    <>
      <Navbar />
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
            <ButtonIcon />
          </div>
          <div className="home-image-container">
            <Gamer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
