const { Type } = require("../db.js");
const axios = require("axios");

const getAllTypes = async () => {
  const baseDtypes = await Type.findAll();
  if (baseDtypes.length === 0) {
    const allTypes = await axios.get("https://pokeapi.co/api/v2/type");
    const results = allTypes.data.results;
    const copyDb = results.map((elem) => {
      Type.create({
        name: elem.name,
      });
    });
    return results;
  } else {
    return baseDtypes;
  }
};

module.exports = getAllTypes;
