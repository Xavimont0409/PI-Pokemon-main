import "./LandingPage.css";
import start from "../../../img/buttonStar.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="capsula">
        <div className="div-img">
          <Link to="/home">
            <img className="start-button" src={start} alt="" />
          </Link>
        </div>
        <div className="div-titulo">
          <div>
            <h1>Proyecto</h1>
            <h1>Individual</h1>
            <h1>Henry</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
