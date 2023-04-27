const validatePokemon = async (req, res, next) => {
    try {
        const { name, image, life, attack, defense} = req.body;
        if (!name) 
          throw new Error('Name does not exist');
        if (!image) 
          throw new Error('Image does not exist');
        if (!life) 
          throw new Error('life does not exist');
        if (!attack) 
          throw new Error('attack does not exist');
        if (!defense) 
          throw new Error('defense does not exist');
        next();
      } catch (error) {
        res.status(400).send(error.message);
      }
    }
module.exports = validatePokemon;
