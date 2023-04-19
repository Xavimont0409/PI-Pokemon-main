import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getPokemonDetail,
  cleanCharacterDetail,
} from "../redux/actions/actions";

const DetailPokemon = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemonsDetails = useSelector((state) => state.pokemonsDetails);

  useEffect(() => {
    dispatch(getPokemonDetail(id));

    return () => dispatch(cleanCharacterDetail());
  }, [dispatch, id]);

  return (
    <>
      { Object.keys(pokemonsDetails).length ? (
        <div className="detail-container">
          <div>
            <img
              className="image-detail"
              src={pokemonsDetails.image}
              alt={pokemonsDetails.name}
            />
          </div>
          <h1>{pokemonsDetails.name}</h1>
          <p>{pokemonsDetails.life}</p>
          <p>{pokemonsDetails.attack}</p>
          <p>{pokemonsDetails.defense}</p>
          <p>{pokemonsDetails.speed}</p>
          <p>{pokemonsDetails.heigh}</p>
          <p>{pokemonsDetails.weight}</p>
          <ul>{pokemonsDetails.types.map((type)=> <li key={type} >{type}</li>)}</ul> 
        </div>
      ) : (
        <h1>...CARGANDO</h1>
      )}
    </>
  );
};

export default DetailPokemon;
