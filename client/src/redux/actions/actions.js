import {
  GET_ALL_POKEMONS,
  GET_POKEMON_DETAIL,
  CLEAN_CHARACTER_DETAIL,
} from "./actions-types";
import axios from "axios";

export const getAllPokemons = () => {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/pokemons");
    const data = json.data;
    return dispatch({
      type: GET_ALL_POKEMONS,
      payload: data,
    });
  };
};

export const getPokemonDetail = (id) => {
  return function (dispatch) {
      axios(`http://localhost:3001/pokemons/${id}`)
      .then((response) => response.data)
      .then((data) => {
        return dispatch({
          type: GET_POKEMON_DETAIL,
          payload: data,
        });
      });
  };
};

export const cleanCharacterDetail = () => {
  return { type: CLEAN_CHARACTER_DETAIL };
};
