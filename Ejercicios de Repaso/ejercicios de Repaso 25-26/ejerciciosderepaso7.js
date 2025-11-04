import { productos } from "./src/db/data.js"; 

/**
 * Extrae las etiquetas únicas de un array de productos.
 * 
 * @param {object[]} productos - Array de objetos con propiedades 'etiquetas'
 * @returns {Set<string>} - Set con las etiquetas únicas de los productos
 */
const extraerEtiquetasUnicas = (productos) => {
    // 1. Usamos flatMap para mapear cada producto a su array de 'etiquetas'
    // y luego aplanar todos esos arrays en una única lista.
    const todasLasEtiquetas = productos.flatMap(producto => producto.etiquetas || []); // la alternativa a .flatMap() es .reduce()

//la alternativa a la linea 12 es la siguiente:
// const todasLasEtiquetas = productos.reduce((acc, producto) => {
//     return acc.concat(producto.etiquetas || []);
// }, []);       

    // 2. Creamos un nuevo Set pasando el array plano. 
    // El constructor de Set elimina automáticamente todos los duplicados.
    const etiquetasUnicasSet = new Set(todasLasEtiquetas);

    return etiquetasUnicasSet;
};

/**
 * Sistema de etiquetas para productos
 * 
 * @function
 * @property {Function} agregarEtiqueta - Agrega una etiqueta a un producto
 * @property {Function} eliminarEtiqueta - Elimina una etiqueta de un producto
 * @property {Function} obtenerProductosConEtiqueta - Obtiene un array de productos con una etiqueta dada
 * @property {Function} etiquetasDisonibles - Obtiene un Set con todas las etiquetas únicas de los productos
 */
function sistemaEtiquetas(){
    function agregarEtiqueta(etiqueta){
        producto.etiquetas.push(etiqueta);
        return producto;
    }


/**
 * Elimina una etiqueta de un producto
 * 
 * @param {string} etiqueta - Etiqueta a eliminar
 * @returns {object} - Producto con la etiqueta eliminada
 */
    function eliminarEtiqueta(etiqueta){
        //esto busca el indice de la etiqueta en el array de etiquetas del producto
        //el .indexOf() devuelve -1 si no encuentra la etiqueta y elimina el elemento , de lo contrario devuelve el indice de la etiqueta en el array y lo elimina
        const indice = producto.etiquetas.indexOf(etiqueta);
        //si el indice es -1, la etiqueta no estaba en el array
        if (indice !== -1) {
            //el metodo .splice() elimina un elemento del array
            producto.etiquetas.splice(indice, 1); //lo de dentro del parentesis es el numero de elementos a eliminar es decir desde el indice 1 elimina 1 elemento
        }
        return producto;
    }

/**
 * Obtiene un array de productos con una etiqueta dada
 * 
 * @param {string} etiqueta - Etiqueta a buscar en los productos
 * @returns {Array<object>} - Array de productos que tienen la etiqueta dada
 */
    function obtenerProductosConEtiqueta(etiqueta){
        return productos.filter((producto) => producto.etiquetas.includes(etiqueta));
    }

/**
 * Obtiene un Set con todas las etiquetas únicas de los productos
 * @returns {Set<string>} - Set con las etiquetas únicas de los productos
 */
    function etiquetasDisonibles(){
        return etiquetasUnicas;
    }
}