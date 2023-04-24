import DetailPokemon from "./components/views/DetailPokemon/DetailPokemon";
import LandingPage from "./components/views/LandingPage/LandingPage";
import Home from "./components/views/Home/Home";
import FormPage from "./components/FormPage/FormPage";
import { Route, Routes } from "react-router-dom";


function App() {


  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/DetailPokemon/:id" element={<DetailPokemon />} />
        <Route path="/create" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
