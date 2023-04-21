import "../styles/FormPage.css";
//import iconos
import iconCharmander from '../img/iconForm/charmander.png'
import iconAltura from '../img/iconForm/altura.png'
import iconBascula from '../img/iconForm/bascula.png'
import iconDumbbell from '../img/iconForm/dumbbell.png'
import iconGallery from '../img/iconForm/gallery.png'
import iconKatana from '../img/iconForm/katana.png'
import iconRunning from '../img/iconForm/running-shoes.png'
import iconShield from '../img/iconForm/shield.png'
import iconStar from '../img/iconForm/star.png'

import { validate } from "../validadoForm/validate";
import { useState, useEffect } from "react";
import { getAllTypes, postPokemon } from "../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import PokeCard from './PokeCard'

const FormPage = () => {
  const [creatNewPokemon, setCreateNewPokemon] = useState({
    name: "",
    image: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });
  const [error, setError] = useState({
    name: "",
    image: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.allTypes);

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setCreateNewPokemon({ ...creatNewPokemon, [property]: value });
    setError(validate({ ...creatNewPokemon, [property]: value }));
  };

  const handleTypeChange = (event) => {
    const value = event.target.value;
    if (!creatNewPokemon.types.includes(value)) {
      setCreateNewPokemon({
        ...creatNewPokemon,
        types: [...creatNewPokemon.types, value],
      });
    }
  };

  const handleOnSubmit = () => {
    if (
      creatNewPokemon.name &&
      creatNewPokemon.image &&
      creatNewPokemon.life &&
      creatNewPokemon.attack &&
      creatNewPokemon.types
    ) {
      dispatch(postPokemon(creatNewPokemon));
    } else {
      alert("falta completar datos");
    }
  };

  return (
    <div className="container-allForm">
      <div><h1>home</h1></div>
      <div className="container-form">
        <form className="form">
          <h3 className="name-form">Create Pokemon</h3>
          <div className="input-name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="input-form"
              value={creatNewPokemon.name}
              onChange={handleInputChange}
            />
            <img className="icons" src={iconCharmander} alt="" />
            <p>{error.name}</p>
          </div>
          <div className="input-name2">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              className="input-form"
              value={creatNewPokemon.image}
              onChange={handleInputChange}
            />
            <img className="icons" src={iconGallery} alt="" />
            <p>{error.image}</p>
          </div>
          <div className="input-name3">
            <label htmlFor="life">Life</label>
            <input
              type="text"
              name="life"
              className="input-form"
              value={creatNewPokemon.life}
              onChange={handleInputChange}
            />
            <img className="icons" src={iconDumbbell} alt="" />
            <p>{error.life}</p>
          </div>
          <div className="input-name4">
            <label htmlFor="attack">Attack</label>
            <input
              type="text"
              name="attack"
              className="input-form"
              value={creatNewPokemon.attack}
              onChange={handleInputChange}
            />
            <img className="icons" src={iconKatana} alt="" />
            <p>{error.attack}</p>
          </div>
          <div className="input-name5">
            <label htmlFor="defense">Defense</label>
            <input
              type="text"
              name="defense"
              className="input-form"
              value={creatNewPokemon.defense}
              onChange={handleInputChange}
            />
            <img className="icons" src={iconShield} alt="" />
            <p>{error.defense}</p>
          </div>
          <div className="input-name6">
            <label htmlFor="speed">Speed</label>
            <input
              type="text"
              name="speed"
              className="input-form"
              value={creatNewPokemon.speed}
              onChange={handleInputChange}
            />
            <img className="icons" src={iconRunning} alt="" />
            <p>{error.speed}</p>
          </div>
          <div className="input-name7">
            <label htmlFor="height">Height</label>
            <input
              type="text"
              name="height"
              className="input-form"
              value={creatNewPokemon.height}
              onChange={handleInputChange}
            />
            <img className="icons" src={iconAltura} alt="" />
            <p>{error.height}</p>
          </div>
          <div className="input-name8">
            <label htmlFor="weight">Weight</label>
            <input
              type="text"
              name="weight"
              className="input-form"
              value={creatNewPokemon.weight}
              onChange={handleInputChange}
            />
            <img className="icons" src={iconBascula} alt="" />
            <p>{error.weight}</p>
          </div>
          <div className="select-types">
            <label>
              <select onChange={(event) => handleTypeChange(event)}>
                <option value="-">Types</option>
                {allTypes.map((type) => (
                  <option value={type.name} id={type.id} key={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </label>
            <div className='select_arrow2'></div>
          </div>
          <button className="buttonfrom" onClick={() => handleOnSubmit()}>AGREGAR</button>
        </form>
      </div>
      <div className="container-cardForm">
        {
        ( creatNewPokemon.name && creatNewPokemon.image ) ? <PokeCard id={0} name={creatNewPokemon.name} image={creatNewPokemon.image} types={creatNewPokemon.types} />  : <h1>...Cargando</h1>
        }
      </div>
    </div>
  );
};

export default FormPage;
