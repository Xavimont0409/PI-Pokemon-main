import "../styles/Home.css";
import NavBar from "./NavBar";
import PokeCards from "./PokeCards";
import Paginado from "./Paginado";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllPokemons } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);
  const pokemons = useSelector((state) => state.pokemons);
  const [orderRating, setOrderRating] = useState("");
  const [orderName, setOrderName] = useState("");

  const [currentPag, setCurrentPag] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPag * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  useEffect(() => {
    if (allPokemons.length === 0) {
      dispatch(getAllPokemons());
    }
  }, [dispatch, allPokemons]);

  const paginado = (pageNumber) => {
    setCurrentPag(pageNumber);
  };

  return (
    <div className="container-home">
      <div>
        <NavBar
          setOrderRating={setOrderRating}
          setCurrentPag={setCurrentPag}
          orderRating={orderRating}
          setOrderName={setOrderName}
        />
      </div>
      <div>
        <div>
          <div className="container-home-create">
            <div className="home">
              <Link to="/home">
                <h2>Home</h2>
              </Link>
            </div>
            <div className="create">
              <Link to="/create">
                <h2>Create Pokemon</h2>
              </Link>
            </div>
          </div>
          <Paginado
            pokemons={pokemons.length}
            pokemonsPerPage={pokemonsPerPage}
            paginado={paginado}
          />
        </div>
        <div>
          <PokeCards props={currentPokemons} />
        </div>
      </div>
    </div>
  );
};

export default Home;
