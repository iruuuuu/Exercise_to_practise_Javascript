import { productos } from "./src/db/data.js"; // Asumiendo que la ruta es correcta

/**
 * Ejercicio 6: Gestión de Inventario con Map
 * Crea un sistema de inventario basado en Map y devuelve funciones para gestionarlo.
 */
const gestionarInventario = () => {
    // 1. Crear un Map a partir del array productos
    // Clave: id del producto, Valor: objeto producto completo
    const inventarioMap = new Map();
    productos.forEach(producto => {
        inventarioMap.set(producto.id, producto);
    });

    // 2. Implementar las operaciones sobre el Map:

    /**
     * Actualiza el stock de un producto dado su ID.
     * @param {number} idProducto - ID del producto a actualizar.
     * @param {number} nuevaCantidad - Nuevo valor de stock.
     */
    const actualizarStock = (idProducto, nuevaCantidad) => {
        const producto = inventarioMap.get(idProducto);
        if (producto) {
            producto.stock = nuevaCantidad; // Modifica la referencia al objeto en el Map
            console.log(`✅ Stock de ${producto.nombre} (ID ${idProducto}) actualizado a: ${nuevaCantidad}`);
        } else {
            console.log(`❌ Error: Producto con ID ${idProducto} no encontrado.`);
        }
    };

    /**
     * Devuelve el objeto producto dado su ID.
     * @param {number} idProducto - ID del producto a obtener.
     * @returns {Object|undefined} El objeto producto o undefined.
     */
    const obtenerProductoPorId = (idProducto) => {
        return inventarioMap.get(idProducto);
    };

    /**
     * Devuelve un array de productos cuyo stock es inferior al límite.
     * @param {number} limite - Cantidad máxima de stock permitida.
     * @returns {Array<Object>} Array de productos con stock bajo.
     */
    const productosConBajoStock = (limite) => {
        // Itera sobre los valores del Map y filtra
        return Array.from(inventarioMap.values()).filter(
            producto => producto.stock < limite
        );
    };

    // 3. Devolver un objeto con estas tres funciones y el Map inicial
    return {
        inventarioMap,
        actualizarStock,
        obtenerProductoPorId,
        productosConBajoStock
    };
};