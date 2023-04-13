const { Router } = require('express');
const pokemonsRouter = require('./pokemosRouter')
const typesRouter = require('./TypesRouter')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/pokemons', pokemonsRouter);
router.use('/types', typesRouter);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;
