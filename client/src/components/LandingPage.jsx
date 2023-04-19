import "../styles/LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container">
      <div>
        <h1>Hola Mundo</h1>
        <div>
          <Link to="/home">
            <button>INGRESAR</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
