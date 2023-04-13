const { Router } = require("express")
const {
    pokemonsHandler,
    pokemonsHandlerById,
    pokemonPosts
} = require('../handlers/pokemonHandler')



const pokemonsRouter = Router();

pokemonsRouter.get('/', pokemonsHandler)
pokemonsRouter.get('/:id', pokemonsHandlerById) 
pokemonsRouter.post('/', pokemonPosts)


module.exports = pokemonsRouter;