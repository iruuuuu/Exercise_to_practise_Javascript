import { productos } from "../src/db/data";

const analizarProductosPorCategoria = () =>{

const arrayProductos = (productos)=> {
const analizarProductosPorCategoria = (productos) => {
    const resultados = productos.reduce((acumulador, producto) => {
        const { categoria, precio, stock, valoracion } = producto;

        // Inicializar la categoría si es la primera vez que se encuentra
        if (!acumulador[categoria]) {
            acumulador[categoria] = {
                numProductos: 0,
                sumaPrecios: 0,
                stockTotal: 0,
                sumaValoraciones: 0,
                precioMedio: 0,
                valoracionMedia: 0,
            };
        }

        // 1. Acumular valores
        acumulador[categoria].numProductos += 1;
        acumulador[categoria].sumaPrecios += precio;
        acumulador[categoria].stockTotal += stock;
        acumulador[categoria].sumaValoraciones += valoracion;

        return acumulador;
    }, {});

    // 2. Calcular medias finales (fuera del reduce para evitar cálculos repetitivos)
    for (const categoria in resultados) {
        const cat = resultados[categoria];
        const num = cat.numProductos;

        // Aseguramos que la media sea un número con dos decimales (o más si es necesario)
        cat.precioMedio = parseFloat((cat.sumaPrecios / num).toFixed(2));
        cat.valoracionMedia = parseFloat((cat.sumaValoraciones / num).toFixed(2));

        // Limpieza: eliminar las propiedades de suma usadas solo para el cálculo
        delete cat.sumaPrecios;
        delete cat.sumaValoraciones;
    }

    return resultados;
};

// Ejecución y resultado de la función principal
const analisisPorCategoria = analizarProductosPorCategoria(productos);

console.log("--- Análisis de Productos por Categoría (Resultado Principal) ---");
console.log(analisisPorCategoria);
/*
{
  Electrónica: {
    numProductos: 4,
    stockTotal: 120,
    precioMedio: 471.38,
    valoracionMedia: 4.5
  },
  Ropa: {
    numProductos: 3,
    stockTotal: 235,
    precioMedio: 45.33,
    valoracionMedia: 3.87
  },
  Libros: {
    numProductos: 1,
    stockTotal: 200,
    precioMedio: 18.5,
    valoracionMedia: 4.7
  }
}
*/
    }
}