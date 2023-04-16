import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <Link to='/home' >
          <h2>HOME</h2>
        </Link>
        <h2>CREATE POKEON</h2>
        <h3>Filtro Name</h3>
        <h3>Filtro Attack</h3>
        <h3>Filtro Create</h3>
      </div>
    </nav>
  );
};

export default NavBar;
