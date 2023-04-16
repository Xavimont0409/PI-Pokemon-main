import PokeCards from "./components/PokeCards";
import DetailPokemon from "./components/DetailPokemon";
import LandingPage from "./components/LandingPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { getAllPokemons } from "./redux/actions/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";



function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(getAllPokemons())
    
  },[])

  


  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<PokeCards />} />
        <Route exact path="/DetailPokemon/:id" element={<DetailPokemon />} />
      </Routes>
    </div>
  );
}

export default App;
