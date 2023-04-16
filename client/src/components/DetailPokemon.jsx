import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetail } from "../redux/actions/actions";

const DetailPokemon = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { name, image, life, attack, defense, speed, heigh, weight, types } =
    useSelector((state) => state.pokemonsDetails);

  useEffect(() => {
    dispatch(getPokemonDetail(id));
  }, []);


  return (
    <div className="detail-container">
      <div>
        <img className="image-detail" src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{life}</p>
      <p>{attack}</p>
      <p>{defense}</p>
      <p>{speed}</p>
      <p>{heigh}</p>
      <p>{weight}</p>
      <p>{types}</p>
    </div>
  );
};

export default DetailPokemon;
