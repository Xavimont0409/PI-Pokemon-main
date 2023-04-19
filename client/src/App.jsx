import DetailPokemon from "./components/DetailPokemon";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import FormPage from "./components/FormPage";
import { Route, Routes } from "react-router-dom";


function App() {


  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/DetailPokemon/:id" element={<DetailPokemon />} />
        <Route exact path="/create" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
