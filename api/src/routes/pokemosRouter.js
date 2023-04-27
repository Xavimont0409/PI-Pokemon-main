const { Router } = require("express");
const {
  pokemonsHandler,
  pokemonsHandlerById,
  pokemonPosts,
  pokemonDelete,
  pokemonUpdate
} = require("../handlers/pokemonHandler");
const validatePokemon = require('../middleware/validate')

const pokemonsRouter = Router();

pokemonsRouter.get("/", pokemonsHandler);
pokemonsRouter.get("/:id", pokemonsHandlerById);
pokemonsRouter.post("/",validatePokemon, pokemonPosts);
pokemonsRouter.delete("/:id", pokemonDelete)
pokemonsRouter.put('/:id',validatePokemon, pokemonUpdate)

module.exports = pokemonsRouter;
