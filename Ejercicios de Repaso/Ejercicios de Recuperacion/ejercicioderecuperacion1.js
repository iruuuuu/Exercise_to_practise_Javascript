const inventarioObjetos = new Map();

// 2. Agrega el Platano
inventarioObjetos.set("Platano", {cantidad: 3,categoria: "Fruta",precio: 2.0 });

inventarioObjetos.set("Cebolla", {cantidad: 10,categoria: "Verdura",precio: 0.5});

inventarioObjetos.set("Manzana", {cantidad: 20,categoria: "Fruta",precio: 1.2});

function createInventory(inventarioObjetos){

    function agregarProducto(nombre, cantidad, categoria, precio){
        if (inventarioObjetos.has(nombre)) {
            return console.log("El producto ya existte en el inventarioObjetos")
        }else{
            inventarioObjetos.set(nombre, { cantidad, categoria, precio });
            console.log("Producto agregado con exito");
        }
    }


function actualizarProducto(nombre, cantidad, precio) {
    if (inventarioObjetos.has(nombre)) {
        const producto = inventarioObjetos.get(nombre);
        producto.cantidad = cantidad;
        producto.precio = precio;
        inventarioObjetos.set(nombre, producto);
        console.log("Producto actualizado con éxito");
    } else {
        console.log("El producto no existe en el inventario");
    }
}


function borrarProducto(nombre) {
    if (inventarioObjetos.has(nombre)) {
        inventarioObjetos.delete(nombre);
        console.log("Producto borrado con éxito");
    } else {
        console.log("El producto no existe en el inventario");
    }
}

function productosPorCategoria(categoria) {
    inventarioObjetos.forEach((producto, nombre) => {
        if (producto.categoria === categoria) {
            console.log(nombre, producto);
        }
    });
}

function productosOrdenadosPorPrecio() {
    // Convertimos el Map a un array de [nombre, producto] para poder ordenar
    const productosArray = Array.from(inventarioObjetos.entries());

    // Ordenamos por precio ascendente
    productosArray.sort((a, b) => a[1].precio - b[1].precio);

    // Mostramos los productos
    console.log("Productos ordenados por precio:");
    productosArray.forEach(([nombre, producto]) => {
        console.log(`${nombre}: $${producto.precio} - Cantidad: ${producto.cantidad} - Categoría: ${producto.categoria}`);
    });
}


return { agregarProducto,actualizarProducto,borrarProducto, productosPorCategoria, productosOrdenadosPorPrecio };
}
