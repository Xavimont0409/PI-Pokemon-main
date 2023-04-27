export const validate = (creatNewPokemon) => {
  let regexName = /^[a-z]+$/;
  let regexImg =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  let rexNum = /^([0-9])*$/;  

  let errors = {};
  //! VALIDACION NAME
  if (!creatNewPokemon.name)
    errors.name = "Username must not be empty";
  else if (!regexName.test(creatNewPokemon.name))
    errors.name = "Cannot have numbers";
  else if (creatNewPokemon.name !== creatNewPokemon.name.toLowerCase())
    errors.name = "Cannot have capital letters";

  //!Validacion link Image
  if (creatNewPokemon.image) {
    if (!regexImg.test(creatNewPokemon.image))
      errors.image = "It has to be an Image Link";
  }

  //! validacion vida
  if(creatNewPokemon.life){
    if(!rexNum.test(creatNewPokemon.life)) errors.life= "Only numbers"
  }

  //!validacion attack
  if(creatNewPokemon.attack){
    if(!rexNum.test(creatNewPokemon.attack)) errors.attack= "Only numbers"
  }

  //!validacion defense
  if(creatNewPokemon.defense){
    if(!rexNum.test(creatNewPokemon.defense)) errors.defense = "Only numbers"
  }  

  //!validacion spped
    if(creatNewPokemon.speed){
      if(!rexNum.test(creatNewPokemon.speed)) errors.speed = "Only numbers"
    }  

  //!validacion height
  if(creatNewPokemon.height){
    if(!rexNum.test(creatNewPokemon.height)) errors.height = "Only numbers"
  }  

  //!validacion weight
  if(creatNewPokemon.weight){
    if(!rexNum.test(creatNewPokemon.weight)) errors.weight= "Only numbers"
  }

  return errors;
};
