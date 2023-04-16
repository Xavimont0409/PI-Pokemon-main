import PokeCard from "./PokeCard";
import { useSelector } from "react-redux";  
import '../styles/PokeCards.css'

const PokeCards = () => {

  const  pokemons  = useSelector((state) => state.pokemons);

  return(
    <div className="cards-container" >
      {
        pokemons.map((pokemon)=>{
          return(
            <PokeCard 
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types}
            />
          )
        })
      }
    </div>
  )
};

export default PokeCards;
