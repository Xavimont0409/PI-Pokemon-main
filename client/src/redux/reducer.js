import { GET_ALL_POKEMONS, GET_POKEMON_DETAIL } from "./actions/actions-types";

const initialState = {
  pokemons: [],
  pokemonsDetails: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload
      }
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokemonsDetails: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
