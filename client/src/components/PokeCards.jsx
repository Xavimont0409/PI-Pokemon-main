import '../styles/PokeCards.css'
import PokeCard from "./PokeCard";  

const PokeCards = (props) => {

  return(
    <div className="cards-container" >
      {
        props.props.map((pokemon)=>{
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
