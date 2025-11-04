import { usuarios } from "../src/db/data";

function buscarUsuariosPorHobbies(hobbies){
    const hobbies=["Lectura","Senderismo","Cocina"];
    const usuariosConHobbies=usuarios.filter(usuarios=>usuarios.hobbies.every(hobby=>hobbies.includes(hobby)));
    return usuariosConHobbies;
}