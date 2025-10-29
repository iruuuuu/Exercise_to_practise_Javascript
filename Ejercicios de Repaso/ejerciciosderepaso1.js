import { usuarios } from "../src/db/data.js";


//const obtenerUsuariosActivosOrdenados=(usuarios)=>{
//    usuarios.filter(usuarios=usuarios
//    .filter(usuarios=>usuarios.activo==true))
//    .sort((a,b)=>a.edad-b.edad);
//
//    usuarios.map=[nombre,email,edad]
//
//    return usuarios;
//}


const obtenerUsuariosActivosOrdenados = (usuarios) => {
    // 1. Filtrar activos
    const activos = usuarios.filter(usuario => usuario.activo === true);

    // 2. Ordenar por edad descendente (¡b.edad - a.edad!)
    const ordenados = activos.sort((a, b) => b.edad - a.edad);

    // 3. Transformar (mapear)
    const transformados = ordenados.map(usuario => ({
        nombre: usuario.nombre,
        email: usuario.email,
        edad: usuario.edad
    }));

    // 4. Devolver el array resultante
    return transformados;
}