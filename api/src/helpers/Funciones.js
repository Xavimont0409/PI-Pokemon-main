const axios = require('axios')

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
const searchPerNameApi = async (name) => {
  const pokemonListApi = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
      const pokemonApiData = response.data;

      const poke = {
        id: pokemonApiData.id,
        name: pokemonApiData.name,
        image: pokemonApiData.sprites.other["official-artwork"].front_default,
        life: pokemonApiData.stats[0].base_stat,
        attack: pokemonApiData.stats[1].base_stat,
        defense: pokemonApiData.stats[2].base_stat,
        speed: pokemonApiData.stats[5].base_stat,
        height: pokemonApiData.height,
        weight: pokemonApiData.weight,
        types: pokemonApiData.types.map((type) => type.type.name),
        created: false,
      };

      return [poke];
    });
  return pokemonListApi;
};

module.exports = {
  cleanTypesBdd,
  searchPerNameApi
}