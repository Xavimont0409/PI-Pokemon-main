import "../styles/Navbar1.css"
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import FiltroAttack from "./FiltroAttack";
import FiltroName from "./FiltroName";
import FilterTypes from "./FilterType";
import FilterCreated from "./FilterCreated";

const NavBar = ({ setCurrentPag, setOrderRating, orderRating, setOrderName}) => {
  return (
    <nav className="navbar" >
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <Link to='/home' >
          <h2>HOME</h2>
        </Link>
        <h2>CREATE POKEON</h2>
        <SearchBar setCurrentPag={setCurrentPag}/>
        <FiltroAttack setCurrentPag={setCurrentPag} setOrderRating={setOrderRating} orderRating={orderRating}/>
        <FiltroName setCurrentPag={setCurrentPag} setOrderName={setOrderName} />
        <FilterTypes />
        <FilterCreated setCurrentPag={setCurrentPag}/>
      </div>
    </nav>
  );
};

export default NavBar;
