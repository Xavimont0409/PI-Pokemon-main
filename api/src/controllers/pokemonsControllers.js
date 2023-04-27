const { Pokemon, Type } = require("../db.js");
const {
  cleanTypesBdd,
  searchPerNameApi,
  cleanObj
} = require('../helpers/Funciones.js')
const axios = require("axios");

//* Agrega pokemon por post
const addPosts = async (name, image, life, attack, defense, speed, height, weight, types) => {
  const pokeFind = await Pokemon.findOne({where: {name : name}})
  if(pokeFind) throw Error('This Pokemon already exists')

  const newUser = await Pokemon.create({ name, image, life, attack, defense, speed, height, weight});
  let typesBdd = await Type.findAll({ where: { name: types } });
  await newUser.addType(typesBdd);
  return newUser;
};

//* Agrega pokemons por ID
const getPokemonId = async (id, source) => {
  if (source === "api") {
    const pokemonId = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const char = pokemonId.data;
    const poke = cleanObj(char)
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

      const poke = cleanObj(pokeApiData)

      return [poke];
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        return [];
      } else {
        throw error;
      }
    });

  return pokemonListApi.concat(pokemonsBddClean);
};

const deletePokemon = async (id) =>{
  const delet = await Pokemon.findByPk(id)
  delet.destroy()
}
const updatePokemon = async ( id, name, image, life, attack, defense, speed, height, weight, types)=>{
  const findPokemonById = await Pokemon.findOne({
    where: { id : id }
  })
  if(name) findPokemonById.name = name
    if(image) findPokemonById.image = image
    if(life) findPokemonById.life = life
    if(attack) findPokemonById.attack = attack
    if(defense) findPokemonById.defense = defense
    if(speed) findPokemonById.speed = speed
    if(height) findPokemonById.height = height
    if(weight) findPokemonById.weight = weight
    
    const updatePokemon = await findPokemonById.save()
    return updatePokemon
}

module.exports = {
  addPosts,
  getPokemonId,
  getAllPokemon,
  searchPokemonByName,
  deletePokemon,
  updatePokemon
};
