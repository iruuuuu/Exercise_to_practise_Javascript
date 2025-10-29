const ventas = [
    { product: "Laptop", category: "Electronics", quantity: 2, price: 1000 },
    { product: "Phone", category: "Electronics", quantity: 3, price: 500 },
    { product: "Shirt", category: "Clothing", quantity: 5, price: 30 },
    { product: "Laptop", category: "Electronics", quantity: 1, price: 1000 },
    { product: "Shoes", category: "Clothing", quantity: 2, price: 60 },
];



function calcularTotalVentasProducto(ventas) {
    const totalPorProducto = {}; // objeto donde guardamos totales

    ventas.forEach(venta => {
        const nombre = venta.product;
        const totalVenta = venta.quantity * venta.price;

        if (totalPorProducto[nombre]) {
            totalPorProducto[nombre] += totalVenta;
        } else {
            totalPorProducto[nombre] = totalVenta;
        }
    });

    return totalPorProducto;
}

function calcularTotalVentasCategoria(ventas) {
    const totalPorCategoria = {}; // objeto donde guardamos totales

    ventas.forEach (venta)=>{
        const categoria = venta.category;

if

        const nºventas = venta.quantity * venta.price;
        const totalVentasCategoria=
    }
