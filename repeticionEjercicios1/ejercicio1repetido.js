import { usuarios } from "../src/db/data";

function obtenerUsuariosActivosOrdenados(usuarios){

    const filtrarUsuarios=((usuarios)=>{
        return usuarios
        .filter(usuario=>usuario
            .activo
                .includes(true))
    })

    const ordenarUsuarios=((filtrarUsuarios)=>{
        return filtrarUsuarios.filter(usuario=>usuario.edad)
    })

    const transformarUsuario=((usuarios)=>{
        return {
            nombre,
            email,
            edad,
        }
    })
}


function obtenerUsuariosActivosOrdenados(usuarios) {
    const usuariosActivos = usuarios.filter(usuario => usuario.activo);
    const usuariosActivosOrdenados = usuariosActivos.sort((a, b) => b.edad - a.edad);
    const usuariosTransformados = usuariosActivosOrdenados.map(usuario => ({
        nombre: usuario.nombre,
        email: usuario.email,
        edad: usuario.edad
    }));
    return usuariosTransformados;

}
