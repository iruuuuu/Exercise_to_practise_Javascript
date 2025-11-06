import { productos } from "../src/db/data";

// Gestiona inventario con un Map cuya clave es idProducto
export function gestionarInventario(productosArray) {
    // 1) Crear el Map: clave = idProducto, valor = objeto producto
    // Usamos una copia del objeto (spread) para evitar modificar el original en el array si no queremos.
    const mapProductos = new Map(productosArray.map(p => [p.idProducto, { ...p }]));

    // 2) Actualizar stock: si existe el producto, actualiza su stock en el Map
    function actualizarStock(idProducto, nuevaCantidad) {
    if (mapProductos.has(idProducto)) {
        const producto = mapProductos.get(idProducto);
      producto.stock = nuevaCantidad;    // actualizamos la propiedad stock
      mapProductos.set(idProducto, producto); // (opcional: vuelve a setear, útil si hiciste copia)
      return true; // indicar que la actualización tuvo éxito
    } else {
      return false; // id no encontrado
    }
    }

  // 3) Obtener producto por id
    function obtenerProductoPorId(idProducto) {
    return mapProductos.get(idProducto) || null;
    }

  // 4) Productos con bajo stock: devuelve un array de productos cuyo stock < limite
    function productosConBajoStock(limite) {
    // [...mapProductos.values()] convierte los valores del Map en un array
    return [...mapProductos.values()].filter(p => p.stock < limite);
    }

  // 5) Devolver el Map y las funciones
    return {
    inventario: mapProductos,
    actualizarStock,
    obtenerProductoPorId,
    productosConBajoStock
    };
}
