let nombres = ["Ana","Luis","Carlos","Marta"];
console.log(nombres);


//agregar al final sofia
nombres.push("Sofia");
console.log(nombres);
//agregar al principio jorge
nombres.unshift("Jorge");
console.log(nombres);
//elimar el primero y guardarla en una variable utimo

let ultimo=null; //me devuelve sofia porque es el elemento eliminado
nombres.pop();
ultimo=nombres;
console.log(nombres);


//Filtra los nombres que tengan más de 4 letras y guarda el resultado en nombresFiltrados

const nombresFiltrados = nombres.filter(nombre => nombre.length > 4);

// Convertir los nombres filtrados a mayúsculas
const nombresMayus = nombresFiltrados.map(nombre => nombre.toUpperCase());
