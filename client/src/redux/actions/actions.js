import { GET_ALL_POKEMONS } from './actions-types'
import axios from 'axios'

export const getAllPokemons = () =>{
  return async (dispacth) =>{
    const allPokemons = await axios.get("http://localhost:3001/pokemons")
  }
}