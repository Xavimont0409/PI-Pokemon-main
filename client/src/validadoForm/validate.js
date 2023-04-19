export const validate = (creatNewPokemon) => {
  let regexName = /^[a-z]+$/;
  let regexImg =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  let rexNum = /^([0-9])*$/;  

  let errors = {};
  //! VALIDACION NAME
  if (!creatNewPokemon.name)
    errors.name = "El nombre de usuario no debe estar vacio";
  else if (!regexName.test(creatNewPokemon.name))
    errors.name = "Nombre no puede tener numero";
  else if (creatNewPokemon.name !== creatNewPokemon.name.toLowerCase())
    errors.name = "El nombre no puede tener mayusculas";

  //!Validacion link Image
  if (creatNewPokemon.image) {
    if (!regexImg.test(creatNewPokemon.image))
      errors.image = "Tiene que ser un Link de Imagen";
  }

  //! validacion vida
  if(creatNewPokemon.life){
    if(!rexNum.test(creatNewPokemon.life)) errors.life= "Solo numeros"
  }

  //!validacion attack
  if(creatNewPokemon.attack){
    if(!rexNum.test(creatNewPokemon.attack)) errors.attack= "Solo numeros"
  }

  //!validacion defense
  if(creatNewPokemon.defense){
    if(!rexNum.test(creatNewPokemon.defense)) errors.defense = "solo numeros"
  }  

  //!validacion spped
    if(creatNewPokemon.speed){
      if(!rexNum.test(creatNewPokemon.speed)) errors.speed = "solo numeros"
    }  

  //!validacion height
  if(creatNewPokemon.height){
    if(!rexNum.test(creatNewPokemon.height)) errors.height = "solo numeros"
  }  

  //!validacion weight
  if(creatNewPokemon.weight){
    if(!rexNum.test(creatNewPokemon.weight)) errors.weight= "solo numeros"
  }

  return errors;
};
