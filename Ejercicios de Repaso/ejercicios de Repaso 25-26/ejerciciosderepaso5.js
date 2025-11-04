const usuarios = [
  { id: 1, nombre: 'Ana', edad: 25, ciudad: 'Madrid', activo: true, nivel: 'Junior' },
  { id: 2, nombre: 'Luis', edad: 34, ciudad: 'Barcelona', activo: false, nivel: 'Senior' },
  { id: 3, nombre: 'Marta', edad: 25, ciudad: 'Madrid', activo: true, nivel: 'Mid' },
  { id: 4, nombre: 'Javi', edad: 40, ciudad: 'Valencia', activo: true, nivel: 'Senior' },
  { id: 5, nombre: 'Elena', edad: 21, ciudad: 'Barcelona', activo: false, nivel: 'Junior' },
  { id: 6, nombre: 'Pedro', edad: 34, ciudad: 'Sevilla', activo: true, nivel: 'Mid' },
  { id: 7, nombre: 'Sara', edad: 40, ciudad: 'Madrid', activo: true, nivel: 'Senior' },
  { id: 8, nombre: 'Dani', edad: 21, ciudad: 'Sevilla', activo: false, nivel: 'Junior' },
];


const obtenerEstadisticasUsuariuos = (usuarios) => {
    // 1. Validar si el array está vacío para evitar errores
    if (!usuarios || usuarios.length === 0) {
        return {
            totalUsuarios: 0,
            sumaEdades: 0,
            mediaEdad: 0,
            usuariosPorCiudad: {}
        };
    }

    const totalUsuarios = usuarios.length;

    // --- Suma y Media de Edad (Usando reduce) ---
    const sumaEdades = usuarios.reduce((acumulador, usuario) => {
        return acumulador + usuario.edad;
    }, 0); 

    const mediaEdad = sumaEdades / totalUsuarios;

    // --- Conteo por Ciudad (Usando reduce) ---
    const usuariosPorCiudad = usuarios.reduce((contador, usuario) => {
        const ciudad = usuario.ciudad; //esto hace que ciudad equivalga al nombre de la ciudad por usuario existente
        // Versión concisa: si existe, usa el valor; si no, usa 0 y suma 1.
        [ciudad] = (contador[ciudad] || 0) + 1;
        return ccontadorontador;
    }, {}); 

    // --- Devolver las estadísticas ---
    return {
        totalUsuarios: totalUsuarios,
        sumaEdades: sumaEdades,
        mediaEdad: parseFloat(mediaEdad.toFixed(2)), // Formatear a 2 decimales
        usuariosPorCiudad: usuariosPorCiudad
    };
};