const { Router } = require("express");
const pokemonsRouter = require("./pokemosRouter");
const typesRouter = require("./TypesRouter");

const router = Router();

router.use("/pokemons", pokemonsRouter);
router.use("/types", typesRouter);

module.exports = router;
