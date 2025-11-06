import { pedidos } from "../src/db/data.js";

export function calcularTotalPedidos(pedidos) {
  // Array donde guardaremos el resumen final de cada pedido
const resumenPedidos = [];

  // Recorremos cada pedido dentro del array principal
for (const pedido of pedidos) {

    // 1️⃣ Inicializamos el total de ese pedido
    let totalPedido = 0;

    // 2️⃣ Recorremos todos los productos del pedido
    for (const producto of pedido.productos) {
        const cantidad = producto.cantidad;
        const precioUnitario = producto.precioUnitario;

      // Calculamos el total de ese producto
      const totalProducto = cantidad * precioUnitario;

      // Vamos acumulando el total del pedido
        totalPedido = totalPedido + totalProducto;
    }

    // 3️⃣ Contamos cuántos productos tiene el pedido
    const numeroProductos = pedido.productos.length;

    // 4️⃣ Creamos un nuevo objeto resumen con los datos requeridos
    const resumen = {
        idPedido: pedido.idPedido,
        total: totalPedido,
        numeroProductos: numeroProductos,
        idUsuario: pedido.idUsuario,
        estado: pedido.estado,
        fecha: pedido.fecha
    };

    // 5️⃣ Lo añadimos al array final
    resumenPedidos.push(resumen);
}

  // 6️⃣ Devolvemos el array con todos los resúmenes
return resumenPedidos;
}