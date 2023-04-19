export const validate = (creatNewPokemon) =>{ 
let regexName =  /^[a-z]+$/

  let errors = {}
  //! VALIDACION NAME
  if(!regexName.test(creatNewPokemon.name) ) errors.name ="Nombre no puede tener numero"
  if(!creatNewPokemon.name) errors.name = "El nombre de usuario no debe estar vacio";
  if(creatNewPokemon.name !== creatNewPokemon.name.toLowerCase()) errors.name ="El nombre no puede tener mayusculas";

  return errors
}