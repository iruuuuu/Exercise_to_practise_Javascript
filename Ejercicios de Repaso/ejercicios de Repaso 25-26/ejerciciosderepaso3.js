import { usuarios } from "../../src/db/data";

/**
 * Busca usuarios que tengan al menos uno de los hobbies especificados,
 * y los ordena por número de coincidencias y luego por nombre.
 *
 * @param {string[]} hobbiesABuscar - Array de hobbies a buscar.
 * @returns {object[]} - Un array de objetos de usuario que coinciden con la búsqueda, ordenados.
 */
const buscarUsuariosPorHobbies = (hobbiesABuscar) => {
  // 1. Filtrar usuarios que tengan AL MENOS UNO de los hobbies.
  // Usamos .some() para verificar si algún hobby del usuario está en la lista de búsqueda.
  const usuariosEncontrados = usuarios.filter(usuario =>
    usuario.hobbies.some(hobby => hobbiesABuscar.includes(hobby))
  );

  // 2. Ordenar los resultados con lógica de dos niveles.
  usuariosEncontrados.sort((a, b) => {
    // Calculamos cuántos hobbies coinciden para cada usuario.
    const coincidenciasB = b.hobbies.filter(hobby => hobbiesABuscar.includes(hobby)).length;

    // 3. Ordenar por número de hobbies coincidentes (de más a menos).
    if (coincidenciasA !== coincidenciasB) {
      return coincidenciasB - coincidenciasA; // Descendente
    }

    // 4. En caso de empate, ordenar alfabéticamente por nombre.
    return a.nombre.localeCompare(b.nombre); // Ascendente
  });

  return usuariosEncontrados;
};

// --- Ejemplo de uso ---
// const hobbiesParaBuscar = ["Lectura", "Senderismo", "Cocina"];
// const resultado = buscarUsuariosPorHobbies(hobbiesParaBuscar);
// console.log(resultado);