/**
 * ======================================================
 * EJERCICIO 1: Mapeo y Formato de URLs
 * ======================================================
 * * OBJETIVO: Generar un array de objetos con el 'tituloOriginal',
 * el 'urlSlug' (título en minúsculas y palabras separadas por guiones), 
 * y la 'longitud' de ese slug.
 * * MÉTODOS CLAVE: .map(), .trim(), .toLowerCase(), .split(), .join()
 */
const postTitles = [
    "Mi Primer Articulo",
    "JavaScript ES6 Avanzado",
    " Aprende  Flexbox " // Incluye espacios extra intencionales
];

// ----------------------------------------------------------------
// COMPLETA AQUÍ:
// ----------------------------------------------------------------
const postSlugs = postTitles.map(title => {
    // 1. Usa .trim()
    const trimmedTitle = title;
    
    // 2. Transforma el título a slug (minúsculas, split por ' ', join por '-')
    const urlSlug = trimmedTitle; 
        
    return {
        tituloOriginal: trimmedTitle,
        urlSlug: urlSlug,
        longitud: urlSlug.length
    };
});

console.log("--- EJERCICIO 1 ---");
console.log(postSlugs);


/**
 * ======================================================
 * EJERCICIO 2: Filtrar por Existencia de Elementos
 * ======================================================
 * * OBJETIVO: Filtrar la lista de playlists para quedarte solo con 
 * aquellas que contienen AL MENOS una de las palabras clave 
 * especificadas (búsqueda case-insensitive).
 * * MÉTODOS CLAVE: .filter(), .some(), .includes(), .toLowerCase()
 */
const playlists = [
    { name: "Chill Lofi", tracks: 25 },
    { name: "Rock Clásico 90s", tracks: 50 },
    { name: "Pop Hits 2024", tracks: 40 },
    { name: "Indie y Alternativa", tracks: 30 }
];

const keywords = ["rock", "POP", "metal"];

// ----------------------------------------------------------------
// COMPLETA AQUÍ:
// ----------------------------------------------------------------
const matchingPlaylists = playlists.filter(playlist => {
    // Convierte el nombre a minúsculas para la comparación
    const playlistNameLower = playlist.name.toLowerCase();
    
    // Usa .some() para verificar si alguna de las keywords está incluida
    return false; // Reemplaza esta línea con la lógica .some()
});

console.log("\n--- EJERCICIO 2 ---");
console.log(matchingPlaylists);


/**
 * ======================================================
 * EJERCICIO 3: Reducción para Contabilizar Ocurrencias
 * ======================================================
 * * OBJETIVO: Usar .reduce() para calcular un objeto resumen 
 * con dos propiedades:
 * 1. totalVentas: La suma del campo 'precio' de todos los pedidos.
 * 2. conteoPagos: Un objeto que cuente cuántos pedidos se hicieron 
 * por cada 'metodoPago'.
 * * MÉTODOS CLAVE: .reduce()
 */
const orders = [
    { id: 1, precio: 150, metodoPago: "Tarjeta" },
    { id: 2, precio: 20, metodoPago: "Efectivo" },
    { id: 3, precio: 100, metodoPago: "Tarjeta" },
    { id: 4, precio: 50, metodoPago: "Transferencia" },
    { id: 5, precio: 30, metodoPago: "Tarjeta" }
];

// ----------------------------------------------------------------
// COMPLETA AQUÍ:
// ----------------------------------------------------------------
const salesSummary = orders.reduce((acc, order) => {
    // 1. Acumula el total de ventas
    
    // 2. Actualiza el conteo de pedidos por metodoPago
    
    return acc;
}, {
    totalVentas: 0,
    conteoPagos: {}
});

console.log("\n--- EJERCICIO 3 ---");
console.log(salesSummary);


/**
 * ======================================================
 * EJERCICIO 4: Uso de splice y at para Modificación y Acceso
 * ======================================================
 * * OBJETIVO: 
 * 1. Usar .splice() para ELIMINAR el penúltimo elemento del array.
 * 2. Mostrar el valor del nuevo último elemento usando .at() con índice negativo.
 * * MÉTODOS CLAVE: .splice(), .at()
 * NOTA: .splice() MODIFICA el array original.
 */
let colores = ["rojo", "verde", "azul", "amarillo", "blanco", "negro"];

console.log("\n--- EJERCICIO 4 ---");
console.log("Array Original:", colores);

// ----------------------------------------------------------------
// COMPLETA AQUÍ:
// ----------------------------------------------------------------

// 1. Elimina el penúltimo elemento usando .splice()
const indicePenultimo = colores.length - 2;
// ... (aplica splice aquí)

// 2. Obtiene el nuevo último elemento usando .at(-1)
const nuevoUltimoElemento = null; // Reemplaza 'null' con la llamada a .at()

console.log("Array después de splice:", colores);
console.log("Nuevo último elemento (usando .at(-1)):", nuevoUltimoElemento);