import "../styles/FormPage.css";
import { validate } from "../validadoForm/validate";
import { useState, useEffect } from "react";
import { getAllTypes } from "../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";

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

  return (
    <div className="container-form">
      <form action="">
        <h3>Create Pokemon</h3>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" value={creatNewPokemon.name} onChange={handleInputChange}/>
          <p>{error.name}</p>
        </div>
        <div>
          <label htmlFor="image">Link Imagen</label>
          <input type="text" name="image" value={creatNewPokemon.image} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="life">Vida</label>
          <input type="text" name="life" value={creatNewPokemon.life} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="attack">Ataque</label>
          <input type="text" name="attack" value={creatNewPokemon.attack} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="defense">Defensa</label>
          <input type="text" name="defense" value={creatNewPokemon.defense} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="speed">Velocidad</label>
          <input type="text" name="speed" value={creatNewPokemon.speed} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="heigh">Altura</label>
          <input type="text" name="heigh" value={creatNewPokemon.height} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="weight">Peso</label>
          <input type="text" name="weight" value={creatNewPokemon.weight} onChange={handleInputChange} />
        </div>
        <label>
          Por Tipo -
          <select>
            <option value="-">-</option>
            {allTypes.map((type) => (
              <option value={type.name} key={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default FormPage;
