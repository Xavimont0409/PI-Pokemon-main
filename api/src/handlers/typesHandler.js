const errorUser = require('../helpers/ErrorsHandlers')
const getAllTypes = require("../controllers/typerControllers");

const typesHandler = async (req, res) => {
  try {
    res.status(200).json(await getAllTypes());
  } catch (error) {
    errorUser(error, res)
  }
};

module.exports = typesHandler;
