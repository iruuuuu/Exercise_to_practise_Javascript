import { usuarios } from "../src/db/data";

function obtenerUsuariosActivosOrdenados(usuarios){

    const usuariosActivos=((usuarios)=>{
        usuarios.filter((usuario)=>usuario.activo)
    })

    const ordenUsuariosEdad=((usuariosActivos)=>{
        usuariosActivos.sort((a,b)=> b.edad - a.edad)
    })

    const nuevoObjeto=ordenUsuariosEdad.map((usuario)=>{
        return{
            nombre: usuario.nombre,
            edad: usuario.edad,
            email: usuario.edad,
        }
    })

    return nuevoObjeto;
}


import { productos } from "../src/db/data";

function analizarProductosPorCategoria(productos){

    const agrupados={};

     const categoria = producto.categoria; // la "clave"

    for (producto of productos){
        if(!agrupados[categoria]){
            agrupados[categoria]=[]
        }
        agrupados[categoria].push(producto)
    }
  }


// 1️⃣ Definimos la función que procesa cada producto
const procesarProducto = (acumulador, producto) => {
  const categoria = producto.categoria;

  // Si la categoría no existe, la creamos con valores iniciales
  if (!acumulador[categoria]) {
    acumulador[categoria] = {
      totalProductos: 0,
      sumaPrecios: 0,
      stockTotal: 0,
      sumaValoraciones: 0
    };
  }

  // Actualizamos los valores
  acumulador[categoria].totalProductos = acumulador[categoria].totalProductos + 1;
  acumulador[categoria].sumaPrecios = acumulador[categoria].sumaPrecios + producto.precio;
  acumulador[categoria].stockTotal = acumulador[categoria].stockTotal + producto.stock;
  acumulador[categoria].sumaValoraciones = acumulador[categoria].sumaValoraciones + producto.valoracion;

  // Muy importante: devolvemos el acumulador
  return acumulador;
};

// 2️⃣ Usamos la función en el reduce
const resumenPorCategoria = productos.reduce(procesarProducto, {});