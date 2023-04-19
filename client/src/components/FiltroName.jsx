import { useDispatch } from "react-redux";
import { filterPerName } from "../redux/actions/actions";

const FiltroName = ({ setCurrentPag, setOrderName }) => {
  const dispatch = useDispatch()

  const handlerFilterName = (event) =>{
    event.preventDefault();
    dispatch(filterPerName(event.target.value))
    setCurrentPag(1)
    setOrderName(event.target.value)
  }

  return (
    <div>
      <label>
        Por Nombre -
        <select onChange={(event)=> handlerFilterName(event) }>
          <option value="-">-</option>
          <option value="up">Ascendente</option>
          <option value="down">Descendente</option>
        </select>
      </label>
    </div>
  );
};

export default FiltroName;
