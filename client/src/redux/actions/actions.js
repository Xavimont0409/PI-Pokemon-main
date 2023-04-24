import {
  GET_ALL_POKEMONS,
  GET_POKEMON_DETAIL,
  CLEAN_CHARACTER_DETAIL,
  FILTER_PER_TYPES,
  GET_ALL_TYPES,
  FILTER_PER_ATTACK,
  FILTER_PER_NAME,
  SEARCH_BY_NAME,
  FILTER_PER_CREATED
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
      })
      .catch(error => error)
  };
};

export const cleanCharacterDetail = () => {
  return { type: CLEAN_CHARACTER_DETAIL };
};

export const getAllTypes = () => {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/types");
    const result = json.data;
    return dispatch({
      type: GET_ALL_TYPES,
      payload: result,
    });
  };
};

export const filterPerTypes = (payload) => {
  return {
    type: FILTER_PER_TYPES,
    payload: payload,
  };
};

export const filterPerAttack = (payload) => {
  return function (dispatch) {
    return dispatch({
      type: FILTER_PER_ATTACK,
      payload: payload,
    });
  };
};

export const filterPerName = (payload) =>{
  return function(dispatch){
    return dispatch({
      type: FILTER_PER_NAME,
      payload: payload
    })
  }
}

export const searchByName = (name) =>{
  return async function (dispatch) {
    /* try {
      const json = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
      const response = json.data;
      return dispatch({
        type: SEARCH_BY_NAME,
        payload: response
      })
    } catch (error) {
      console.log(error);
      return error.message
    } */
    axios(`http://localhost:3001/pokemons?name=${name}`)
      .then(response => response.data)
      .then(data => {
        return dispatch({
          type : SEARCH_BY_NAME,
          payload: data
        })
      })
      .catch(error => console.log(error))
  }
}
export const filterPerCreated = (payload) =>{
  return function (dispatch){
    return dispatch({
      type: FILTER_PER_CREATED,
      payload: payload
    })
  }
}

export const postPokemon = (payload)=>{
  return async function(dispatch){
    const response = await axios.post("http://localhost:3001/pokemons/", payload)
    return response
  }
}