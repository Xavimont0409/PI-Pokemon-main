import { Link } from "react-router-dom";
import "../styles/PokeCard.css";

const PokeCard = ({ id, name, image, types }) => {
  return (
    <Link to={`/DetailPokemon/${id}`} >
      <div className="card">
        <div className="card-image">
          <img className="image" src={image} alt={name} />
        </div>
        <div className="nameCard">
          <h1 className="pokeName">{name}</h1>
        </div>
        <div className="typeCard">
          <p>{types}</p> 
        </div>
      </div>
    </Link>
  );
};

export default PokeCard;
