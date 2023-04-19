const Paginado = ({ pokemons, pokemonsPerPage, paginado }) => {
  const pagNumber = [];

  
  for (let i = 1; i <= Math.ceil(pokemons / pokemonsPerPage); i++) {
    pagNumber.push(i);
  }

  return (
    <nav>
      <ul>
        {pagNumber &&
          pagNumber.map((number) =>(
            <li key={number}>
              <button onClick={()=> paginado(number)}>{number}</button>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Paginado;