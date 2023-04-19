import { useDispatch } from "react-redux";
import { filterPerCreated } from "../redux/actions/actions";

const FilterCreated = ({ setCurrentPag }) => {
  const dispatch = useDispatch();
  
  const handlerFilterCreated = (event) =>{
    dispatch(filterPerCreated(event.target.value))
    setCurrentPag(1)
  }


  return (
    <div>
      <label>
        Creado -
        <select onChange={(event)=> handlerFilterCreated(event)}>
          <option value="All">TODOS</option>
          <option value="true">En la base de datos</option>
          <option value="false">En la api</option>
        </select>
      </label>
    </div>
  );
};

export default FilterCreated