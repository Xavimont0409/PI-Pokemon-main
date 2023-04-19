import { useDispatch } from "react-redux";
import { filterPerAttack } from "../redux/actions/actions";

const FiltroAttack = ({ setCurrentPag, setOrderRating, orderRating }) => {
  const dispatch = useDispatch();

  const handlerFilterAttack = (event) => {
    setOrderRating(event.target.id);
    dispatch(filterPerAttack(event.target.id))
    setCurrentPag(1)
  };

  return (
    <div>
      <label htmlFor="up">
        <input
          type="radio"
          id="up"
          name="orderRating"
          checked={orderRating === "up"}
          onChange={(event) => handlerFilterAttack(event)}
        />
        Ascending
      </label>
      <label htmlFor="down">
        <input
          type="radio"
          id="down"
          name="orderRating"
          checked={orderRating === "down"}
          onChange={(event) => handlerFilterAttack(event)}
        />
        Descending
      </label>
    </div>
  );
};

export default FiltroAttack;
