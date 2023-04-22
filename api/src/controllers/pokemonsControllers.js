const { Pokemon, Type } = require("../db.js");
const {
  cleanTypesBdd,
  searchPerNameApi
} = require('../helpers/Funciones.js')
const axios = require("axios");

//* Agrega pokemon por post
const addPosts = async (name, image, life, attack, defense, speed, height, weight, types) => {
  const newUser = await Pokemon.create({ name, image, life, attack, defense, speed, height, weight});
  let typesBdd = await Type.findAll({ where: { name: types } });
  await newUser.addType(typesBdd);
  return newUser;
};

//* Agrega pokemons por ID
const getPokemonId = async (id, source) => {
  if (source === "api") {
    const pokemonId = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    const char = pokemonId.data;
    const poke = {
      id: char.id,
      name: char.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${char.id}.png`,
      life: char.stats[0].base_stat,
      attack: char.stats[1].base_stat,
      defense: char.stats[2].base_stat,
      speed: char.stats[5].base_stat,
      height: char.height,
      weight: char.weight,
      types: char.types.map((type) => type.type.name),
    };
    return poke;
  } else {
    const pokeId = await Pokemon.findAll({
      where: { id },
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    const [ cleanPokeId ] = cleanTypesBdd(pokeId)
    return cleanPokeId    
  }
};

//* Trae todos los pokemons
const getAllPokemon = async () => {
  //!API
  const allPokemons = (await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=60`)).data.results;
  const promesaTodo = await Promise.all(
    allPokemons.map(async (poke) => {
      return await searchPerNameApi(poke.name);
    })
  );
  //! BD
  const allPokemonsData = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  //!LIMPIADOR
  const cleanTypes = cleanTypesBdd(allPokemonsData)

  return cleanTypes.concat(...promesaTodo);
};

//* Trae pokemons por NAME
const searchPokemonByName = async (name) => {
  let nameLower = name.toLowerCase();
  const pokemonListDb = await Pokemon.findAll({
    where: { name: nameLower },
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  const pokemonsBddClean = cleanTypesBdd(pokemonListDb)

  const pokemonListApi = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${nameLower}`)
    .then((response) => {
      const pokeApiData = response.data;

      const poke = {
        id: pokeApiData.id,
        name: pokeApiData.name,
        image: pokeApiData.sprites.other["official-artwork"].front_default,
        life: pokeApiData.stats[0].base_stat,
        attack: pokeApiData.stats[1].base_stat,
        defense: pokeApiData.stats[2].base_stat,
        speed: pokeApiData.stats[5].base_stat,
        height: pokeApiData.height,
        weight: pokeApiData.weight,
        types: pokeApiData.types.map((type) => type.type.name),
        created: false,
      };

      return [poke];
    })
    .catch((error) => {
      return error.message
    });

  return pokemonListApi.concat(pokemonsBddClean);
};

module.exports = {
  addPosts,
  getPokemonId,
  getAllPokemon,
  searchPokemonByName,
};
