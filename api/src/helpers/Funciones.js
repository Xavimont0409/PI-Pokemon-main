const axios = require("axios");

const cleanTypesBdd = (array) => {
  return array.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.image,
      life: pokemon.life,
      attack: pokemon.attack,
      defense: pokemon.defense,
      speed: pokemon.speed,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.Types.map((t) => t.name),
      created: true,
    };
  });
};
const cleanObj = (obj) => {
  return {
    id: obj.id,
    name: obj.name,
    image: obj.sprites.other["official-artwork"].front_default,
    life: obj.stats[0].base_stat,
    attack: obj.stats[1].base_stat,
    defense: obj.stats[2].base_stat,
    speed: obj.stats[5].base_stat,
    height: obj.height,
    weight: obj.weight,
    types: obj.types.map((type) => type.type.name),
    created: false,
  };
};

const searchPerNameApi = async (name) => {
  const pokemonListApi = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
      const pokemonApiData = response.data;

      const poke = cleanObj(pokemonApiData);

      return [poke];
    });
  return pokemonListApi;
};

module.exports = {
  cleanTypesBdd,
  searchPerNameApi,
  cleanObj,
};
