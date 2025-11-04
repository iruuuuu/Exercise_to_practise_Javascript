import { coloresPrimarios, coloresSecundarios, ciudadesPoblacion } from "../../src/db/data.js";

/**
 * Ejercicio 8: Comparación de Colecciones
 * Realiza operaciones de unión, intersección y diferencia en Sets, y filtra un Map.
 */
function compararColecciones() {
    // 1. Operaciones con Sets de colores

    // Unión: todos los colores sin duplicados
    // Al crear un `new Set`, los colores que estén repetidos se eliminan automáticamente.
    // Usamos los tres puntos (...) para sacar todos los colores de cada Set y juntarlos en una sola lista.
    const unionColores = new Set([...coloresPrimarios, ...coloresSecundarios]);

    // Intersección: colores que están en ambos Sets
    // Al crear un `new Set`, los colores que estén repetidos se eliminan automáticamente.
    // Usamos los tres puntos (...) para sacar todos los colores de cada Set y juntarlos en una sola lista.
    // Luego, usamos un filtro para mantener solo los colores que estén en ambos Sets.
    const interseccionColores = new Set(
        [...coloresPrimarios].filter(color => coloresSecundarios.has(color))
    );

    // Diferencia: colores en primarios pero no en secundarios
    // Al crear un `new Set`, los colores que estén repetidos se eliminan automáticamente.
    // Usamos los tres puntos (...) para sacar todos los colores de cada Set y juntarlos en una sola lista.
    // Luego, usamos un filtro para mantener solo los colores que no estén en el Set de secundarios.
    const diferenciaColores = new Set(
        [...coloresPrimarios].filter(color => !coloresSecundarios.has(color))
    );

    // 2. Filtrado del Map de ciudades
    // Al crear un `new Map`, se le puede pasar un array de pares [clave, valor] para inicializarlo.
    // Aquí, convertimos las entradas del mapa a un array, lo filtramos, y usamos el resultado para construir un nuevo mapa.
    const ciudadesGrandes = new Map(
        [...ciudadesPoblacion.entries()].filter(([ciudad, poblacion]) => poblacion > 1000000)
    );

    // 3. Devolver un objeto con todos los resultados
    return {
        unionColores,
        interseccionColores,
        diferenciaColores,
        ciudadesGrandes
    };
}

// --- Funciones adicionales ---

/**
 * Añade un nuevo elemento a una colección (Set o Map).
 * @param {Set|Map} coleccion - La colección a modificar.
 * @param {string} clave - La clave o valor a añadir.
 * @param {*} [valor] - El valor a añadir (solo para Map).
 */
const añadirElemento = (coleccion, clave, valor) => {
    if (coleccion instanceof Set) {
        coleccion.add(clave);
        console.log(`✅ Elemento '${clave}' añadido al Set.`);
    } else if (coleccion instanceof Map) {
        coleccion.set(clave, valor);
        console.log(`✅ Elemento ['${clave}', ${valor}] añadido al Map.`);
    }
};

/**
 * Calcula y muestra estadísticas de las colecciones generadas.
 * @param {object} resultados - El objeto devuelto por compararColecciones.
 */
const calcularEstadisticas = (resultados) => {
    console.log("\n--- 📊 Estadísticas de las Colecciones ---");
    console.log(`Total de colores (unión): ${resultados.unionColores.size}`);
    console.log(`Colores comunes (intersección): ${resultados.interseccionColores.size}`);
    console.log(`Colores exclusivos de primarios (diferencia): ${resultados.diferenciaColores.size}`);
    console.log(`Ciudades con más de 1 millón de habitantes: ${resultados.ciudadesGrandes.size}`);
};

/**
 * Exporta los resultados a un formato JSON.
 * @param {object} resultados - El objeto con los resultados.
 * @returns {string} - Una cadena en formato JSON.
 */
const exportarResultados = (resultados) => {
    const exportable = {
        union: [...resultados.unionColores],
        interseccion: [...resultados.interseccionColores],
        diferencia: [...resultados.diferenciaColores],
        ciudades: Object.fromEntries(resultados.ciudadesGrandes)
    };
    return JSON.stringify(exportable, null, 2); // El '2' formatea el JSON para que sea legible
};

// --- Ejecución y Muestra de Resultados ---

const resultadosPrincipales = compararColecciones();

console.log("--- 🎨 Resultados de Operaciones con Sets ---");
console.log("Unión:", resultadosPrincipales.unionColores);
console.log("Intersección:", resultadosPrincipales.interseccionColores);
console.log("Diferencia (Primarios - Secundarios):", resultadosPrincipales.diferenciaColores);

console.log("\n--- 🏙️ Resultados de Operaciones con Map ---");
console.log("Ciudades con población > 1 millón:", resultadosPrincipales.ciudadesGrandes);

// Ejemplo de uso de las funciones adicionales
calcularEstadisticas(resultadosPrincipales);

console.log("\n--- ➕ Añadiendo nuevos elementos ---");
añadirElemento(resultadosPrincipales.unionColores, 'cian');
añadirElemento(resultadosPrincipales.ciudadesGrandes, 'París', 2100000);
console.log("Set de unión actualizado:", resultadosPrincipales.unionColores);
console.log("Map de ciudades actualizado:", resultadosPrincipales.ciudadesGrandes);

console.log("\n--- 📄 Exportación a JSON ---");
const jsonResultados = exportarResultados(resultadosPrincipales);
console.log(jsonResultados);