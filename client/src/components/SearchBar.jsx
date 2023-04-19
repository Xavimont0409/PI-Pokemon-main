import { useDispatch } from "react-redux";
import { searchByName } from "../redux/actions/actions";
import { useState } from "react";

const SearchBar = ({ setCurrentPag }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("")

  const handlerSearchName = (event) => {
    setName(event.target.value)
  };
  const searchName = (name) =>{
    dispatch(searchByName(name));
    setCurrentPag(1)
  }

  return (
    <div>
      <input type="text" placeholder="Name..." onChange={(event)=>handlerSearchName(event)} />
      <button onClick={()=>searchName(name)} >Buscar</button>
    </div>
  );
};

export default SearchBar;
