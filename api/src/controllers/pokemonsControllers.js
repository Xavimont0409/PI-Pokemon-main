const { Pokemon, Type } = require("../db.js");
const axios = require("axios");

//* Agrega pokemon por post
const addPosts = async (name,image,life,attack,defense,speed,height,weight,types) => {
  const newUser = await Pokemon.create({
    name,
    image,
    life,
    attack,
    defense,
    speed,
    height,
    weight,
  });
  newUser.addType(types);
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
      where:{ id },
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: []
        }
      }
    });
    return pokeId;
  }
};

//* Trae todos los pokemons
const getAllPokemon = async () => {
  //!API
  const allPokemons = (await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=60`)).data.results
  const promesaTodo = await Promise.all(
    allPokemons.map(async(poke)=>{
      return await promesaName(poke.name)
    })
  )
  //! BD
  const allPokemonsData = await Pokemon.findAll({
    include:{
      model: Type,
      attributes: ["name"],
      through:{
        attributes: []
      }
    }
  })
  //!LIMPIADOR
  const cleanTypes = allPokemonsData.map((pokemon) =>{
    const dbType = {
      id : pokemon.id,
      name : pokemon.name,
      image : pokemon.image,
      life: pokemon.life,
      attack: pokemon.attack,
      defense: pokemon.defense,
      speed: pokemon.speed,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.Types.map(t => t.name),
      created : true
    }
    return dbType
  })

  return cleanTypes.concat(...promesaTodo)
};

//* Trae pokemons por NAME
const searchPokemonByName = async (name) => {
  let nameLower = name.toLowerCase()
  const pokemonListDb = await Pokemon.findAll({
    where: { name : nameLower },
    include :{
      model: Type,
      attributes: ["name"],
      through:{
        attributes: []
      }
    }
  });

  const pokemonListApi = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${nameLower}`)
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
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        return [];
      } else {
        throw error;
      }
    });

  return pokemonListDb.concat(pokemonListApi);
};

const promesaName = async(name) =>{
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
    })
    return pokemonListApi
}

module.exports = {
  addPosts,
  getPokemonId,
  getAllPokemon,
  searchPokemonByName,
};
