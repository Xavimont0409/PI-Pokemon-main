import "../styles/FormPage.css";
import { validate } from "../validadoForm/validate";
import { useState, useEffect } from "react";
import { getAllTypes, postPokemon } from "../redux/actions/actions";
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

  const handleTypeChange = (event) =>{
    const value = event.target.value
    if(!creatNewPokemon.types.includes(value)){
      setCreateNewPokemon({...creatNewPokemon, types:[...creatNewPokemon.types, value]  })
    }
  }

  const handleOnSubmit = () =>{
    if(creatNewPokemon.name && creatNewPokemon.image && creatNewPokemon.life && creatNewPokemon.attack && creatNewPokemon.types){
      dispatch(postPokemon(creatNewPokemon));
    }else{
      alert("falta completar datos") 
    }

  }

  return (
    <div className="container-form">
      <form >
        <h3>Create Pokemon</h3>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" value={creatNewPokemon.name} onChange={handleInputChange}/>
          <p>{error.name}</p>
        </div>
        <div>
          <label htmlFor="image">Link Imagen</label>
          <input type="text" name="image" value={creatNewPokemon.image} onChange={handleInputChange} />
          <p>{error.image}</p>
        </div>
        <div>
          <label htmlFor="life">Vida</label>
          <input type="text" name="life" value={creatNewPokemon.life} onChange={handleInputChange} />
          <p>{error.life}</p>
        </div>
        <div>
          <label htmlFor="attack">Ataque</label>
          <input type="text" name="attack" value={creatNewPokemon.attack} onChange={handleInputChange} />
          <p>{error.attack}</p>
        </div>
        <div>
          <label htmlFor="defense">Defensa</label>
          <input type="text" name="defense" value={creatNewPokemon.defense} onChange={handleInputChange} />
          <p>{error.defense}</p>
        </div>
        <div>
          <label htmlFor="speed">Velocidad</label>
          <input type="text" name="speed" value={creatNewPokemon.speed} onChange={handleInputChange} />
          <p>{error.speed}</p>
        </div>
        <div>
          <label htmlFor="height">Altura</label>
          <input type="text" name="height" value={creatNewPokemon.height} onChange={handleInputChange} />
          <p>{error.height}</p>
        </div>
        <div>
          <label htmlFor="weight">Peso</label>
          <input type="text" name="weight" value={creatNewPokemon.weight} onChange={handleInputChange} />
          <p>{error.weight}</p>
        </div>
        <label>
          Por Tipo - 
          <select onChange={(event)=> handleTypeChange(event)}>
            <option value="-">-</option>
            {allTypes.map((type) => (
              <option value={type.name} id={type.id} key={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </label>
          {
            creatNewPokemon.types.length > 0 && creatNewPokemon.types.map((type)=><span key={type}>*{type}</span> ) 
          }
          <button onClick={()=>handleOnSubmit()} >AGREGAR</button>
      </form>
    </div>
  );
};

export default FormPage;
