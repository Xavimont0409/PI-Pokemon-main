//! IMPORTAR LOS CONTROLLERS
const {
  addPosts,
  getPokemonId,
  searchPokemonByName,
  getAllPokemon,
} = require("../controllers/pokemonsControllers");

const pokemonsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const results = name
      ? await searchPokemonByName(name)
      : await getAllPokemon();
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const pokemonsHandlerById = async (req, res) => {
  const { id } = req.params;

  const source = isNaN(id) ? "bdd" : "api";

  try {
    const pokemonId = await getPokemonId(id, source);
    res.status(200).json(pokemonId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const pokemonPosts = async (req, res) => {
  const { name, image, life, attack, defense, speed, height, weight, types } =
    req.body;
  try {
    const newUser = await addPosts(
      name,
      image,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
      types
    );
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  pokemonsHandler,
  pokemonsHandlerById,
  pokemonPosts,
};
