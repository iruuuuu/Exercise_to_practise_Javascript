const pedidos = [
  {
    // Datos de Pedido
    idPedido: 1,
    idUsuario: 101,
    estado: "completado", // o 'pendiente', 'cancelado', etc.
    fecha: new Date('2025-01-15T10:00:00Z'),
    metodoPago: "Tarjeta de Crédito", // Necesario para 'Calcular comisiones'

    // Array Anidado de Productos
    productos: [
      {
        idProducto: 1,
        nombre: "Laptop",
        cantidad: 1, // Necesario para el cálculo
        precioUnitario: 1200.00 // Necesario para el cálculo
      },
      {
        idProducto: 2,
        nombre: "Mouse Inalámbrico",
        cantidad: 2, // Necesario para el cálculo
        precioUnitario: 25.50 // Necesario para el cálculo
      }
    ]
  },
  {
    // Segundo Pedido (ejemplo)
    idPedido: 2,
    idUsuario: 102,
    estado: "pendiente",
    fecha: new Date('2025-02-20T15:30:00Z'),
    metodoPago: "PayPal",
    productos: [
      {
        idProducto: 3,
        nombre: "Monitor 4K",
        cantidad: 1,
        precioUnitario: 350.00
      }
    ]
  }
  // ... más pedidos
];


function calcularTotalPedios(pedidos) {
  

  const calculoPedido= (cantidad , percioUnitario)=>{
    let totalPrecioPedido= cantidad * precioUnitario;
    return totalPrecioPedido;
  }
  
const sumaTotalProductosxPedido = (pedido) => {
  // 2. Aplica 'reduce' al array interno 'productos'
  return pedido.productos.reduce((totalAcumulado, productoActual) => {
    
    // 3. Calcula el total del producto actual usando tu primera función.
    const totalProducto = calculoPedido(productoActual.cantidad, productoActual.precioUnitario);

    // 4. Suma el total del producto actual al acumulador.
    return totalAcumulado + totalProducto;

  }, 0); // 5. El '0' es el  valor inicial del totalAcumulado.
}
}


