import { usuarios } from "../src/db/data";

function obtenerUsuariosActivosOrdenados(usuarios){
    const usuariosActivos=(usuarios)=>{
        return usuarios.filter(usuarios=>usuarios.activo(true))
    }

    const edadUsuarios=(usuariosActivos)=>{
        usuariosActivos.sort((a,b)=>b-a)
    }

    const usuarioNuevo=((usuarios)=>{
        nombre: usuarios.nombre;
        email: usuarios.email;
        edad: usuarios.edad;

        return usuarioNuevo
    })
}