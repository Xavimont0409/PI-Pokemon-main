//! FILTORR POR TYPO 
import { useEffect } from "react";
import { getAllTypes } from "../redux/actions/actions";
import { useSelector, useDispatch } from 'react-redux'
import { filterPerTypes } from "../redux/actions/actions";

  
const FilterTypes= () =>{
  const dispatch = useDispatch()
  const allTypes = useSelector((state) => state.allTypes)

  useEffect(()=>{
    dispatch(getAllTypes())
  },[dispatch])

  const handlerFilterTypes = (event) =>{
    event.preventDefault()
    dispatch(filterPerTypes(event.target.value))
  }

  return (
    <div className="select-name">
      <label>
        <select onChange={(event)=>handlerFilterTypes(event)}>
          <option value="All">Types</option>
          {
            allTypes.map((type)=>
              ( 
                <option value={type.name} key={type.id}>{type.name}</option>
              )
            )
          }
        </select>
        <div className='select_arrow'></div>
      </label>
    </div>
  )
};

export default FilterTypes;