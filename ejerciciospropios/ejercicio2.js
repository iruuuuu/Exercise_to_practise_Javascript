const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

//Combina numeros1 y numeros2 en un solo array llamado todosNumeros.
const todosNumeros =numeros1.concat(numeros2)

console.log(todosNumeros)


//Añade el número 0 al inicio del array todosNumeros.

todosNumeros.unshift(0);
console.log(todosNumeros)

//Elimina el segundo elemento del array (splice).

todosNumeros.splice(1)
console.log(todosNumeros);


//Calcula la suma de todos los elementos usando reduce y guarda el resultado en sumaTotal.

//Convierte todosNumeros en un Set para eliminar posibles duplicados y guárdalo en numerosUnicos.