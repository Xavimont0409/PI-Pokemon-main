const { Pokemon } = require('../db')
const {
  addPosts,
  getPokemonId,
  searchPokemonByName,
  getAllPokemon,
  deletePokemon,
  updatePokemon
} = require("../controllers/pokemonsControllers");
const errorUser = require('../helpers/ErrorsHandlers')

const pokemonsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const results = name
      ? await searchPokemonByName(name)
      : await getAllPokemon();
    res.status(200).json(results);
  } catch (error) {
    errorUser(error, res);
  }
};

const pokemonsHandlerById = async (req, res) => {
  const { id } = req.params;

  const source = isNaN(id) ? "bdd" : "api";

  try {
    const pokemonId = await getPokemonId(id, source);
    res.status(200).json(pokemonId);
  } catch (error) {
    errorUser(error, res);
  }
};

const pokemonPosts = async (req, res) => {
  const { name, image, life, attack, defense, speed, height, weight, types } =
    req.body;
  try {
    const newUser = await addPosts(name, image, life, attack, defense, speed, height, weight, types);
    res.status(201).json(newUser);
  } catch (error) {
    errorUser(error, res);
  }
};
const pokemonDelete = async (req, res)=>{
    const { id } = req.params
  try {
    res.status(200).json(await deletePokemon(id))
  } catch (error) {
    errorUser(error, res)
  }
}
const pokemonUpdate = async (req, res) =>{
  try {
    const { id } = req.params
    const { name, image, life, attack, defense, speed, height, weight } = req.body
    const update = await updatePokemon(id, name, image, life, attack, defense, speed, height, weight )
    res.status(200).json(update)
  } catch (error) {
    errorUser(error, res)
  }
}

module.exports = {
  pokemonsHandler,
  pokemonsHandlerById,
  pokemonPosts,
  pokemonDelete,
  pokemonUpdate
};
