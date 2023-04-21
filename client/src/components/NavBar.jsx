import "../styles/Navbar1.css";
import SearchBar from "./SearchBar";
import FiltroAttack from "./FiltroAttack";
import FiltroName from "./FiltroName";
import FilterTypes from "./FilterType";
import FilterCreated from "./FilterCreated";

const NavBar = ({
  setCurrentPag,
  setOrderRating,
  orderRating,
  setOrderName,
}) => {
  return (
    <nav className="navbar">
      <div className="container-logo">
        <h1>PokeXavi</h1>
      </div>
      <div>
        <div className="filtros" >
          <SearchBar setCurrentPag={setCurrentPag} />
          <FiltroAttack
            setCurrentPag={setCurrentPag}
            setOrderRating={setOrderRating}
            orderRating={orderRating}
          />
          <FiltroName
            setCurrentPag={setCurrentPag}
            setOrderName={setOrderName}
          />
          <FilterTypes />
          <FilterCreated setCurrentPag={setCurrentPag} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
