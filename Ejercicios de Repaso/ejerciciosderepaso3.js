import {usuarios} from "../src/db/data";

const buscarUsuariosPorHobbies = ()=>{
  const hobbies = ["Lectura", "Senderismo", "Cocina"];
  return usuarios.filter(usuarios=>hobbies
    .every(hobby=>usuarios.hobbies
      .includes(hobby)));
}