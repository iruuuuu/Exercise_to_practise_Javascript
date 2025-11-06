import { usuarios } from "../src/db/data.js";

export function obtenerEstadisticasUsuariuos(usuarios){


    const edadMediaUsuarios=((usuarios,edad)=>{
        const cantidadUsuarios= usuarios.lenght;
        const edadUsuarios= usuarios.edad.reduce;

        const mediaEdadUsuarios= edadUsuarios/cantidadUsuarios
        

        const usuarioMasJoven= usuarios.edad.sort((a,b)=> b.edad - a.edad)

        const usuarioMasMayor = usuarios.edad.sort((a,b)=> a.edad - b.edad)

            // --- Conteo por Ciudad (Usando reduce) ---
        const usuariosPorCiudad = usuarios.reduce((contador, usuario) => {
        const ciudad = usuario.ciudad; //esto hace que ciudad equivalga al nombre de la ciudad por usuario existente
        // Versión concisa: si existe, usa el valor; si no, usa 0 y suma 1.
        [ciudad] = (contador[ciudad] || 0) + 1;
        return ccontadorontador;
    }, {}); 

    const porcentajeUsuariosActivos=((usuarios)=>{
        const filtradoUsuariosActivos=((usuarios)=>{
            usuarios.activo.filter((usuario)=>usuario.activo(true))
        })
    const resumenUsuariosActivos = [];
        resumenUsuariosActivos.push(filtradoUsuariosActivos)
    const totalUsuariosActivos = resumenUsuariosActivos.length

        const porcentaje=((totalUsuariosActivos)=>{
            const porcentajeActivos= totalUsuariosActivos/100
        })
    })

        return{
            mediaEdadUsuarios,
            usuarioMasJoven,
            usuarioMasMayor,
            usuariosPorCiudad,
            porcentajeUsuariosActivos
        }
    })
}