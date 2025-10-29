/**
 * ===============================================
 * EJERCICIOS DE OBJETOS EN JAVASCRIPT
 * ===============================================
 * * INSTRUCCIONES: Resuelve los ejercicios completando las líneas marcadas con 
 * 'TU CÓDIGO AQUÍ'. NO incluyas las respuestas en el código.
 */

// -------------------------------------------------------------------------
// EJERCICIO 1: Gestión de Stock y Precios
// -------------------------------------------------------------------------

const inventario = {
    "teclado mecanico": { stock: 50, precio: 75.00 },
    "mouse inalambrico": { stock: 0, precio: 25.50 },
    "monitor 4k": { stock: 15, precio: 350.99 },
    "webcam hd": { stock: 120, precio: 45.00 },
    "disco ssd 1tb": { stock: 30, precio: 80.00 },
};

/**
 * a) Obtener los Nombres de Productos sin Stock.
 * Objetivo: Usar Object.entries() y .filter() para obtener un array
 * con los nombres (claves) de los productos cuyo 'stock' es 0.
 * Resultado esperado (después de ejecutar tu código): ["mouse inalambrico"]
 */


/**
 * b) Calcular el Valor Total del Inventario.
 * Objetivo: Usar Object.values() y .reduce() para calcular el valor total
 * del inventario (stock * precio para cada producto).
 */


// -------------------------------------------------------------------------
// EJERCICIO 2: Filtrado y Desestructuración de Datos Sensibles
// -------------------------------------------------------------------------

const perfilUsuario = {
    id: 105,
    info: {
        username: "coder_2025",
        pais: "ES",
        ajustes: {
            tema: "claro",
            notificaciones: true,
            emailSecundario: "backup@mail.com" 
        }
    },
    datosPrivados: {
        passwordHash: "h4sH5Dsa123F", 
        telefono: "+34 600 112 233"
    },
    activo: true
};

/**
 * a) Eliminar Campos Sensibles con Object.entries() y Object.fromEntries().
 * Objetivo: Crear un objeto 'perfilLimpio' que elimine:
 * 1. La clave de nivel superior 'datosPrivados'.
 * 2. La clave anidada 'emailSecundario' dentro de 'info.ajustes'.
 */

// Paso 1: Filtrar 'ajustes' para eliminar 'emailSecundario'

// Paso 2: Crear el objeto 'infoLimpia' con los ajustes filtrados.
const infoLimpia = {
    ...perfilUsuario.info,
    ajustes: Object.fromEntries(ajustesLimpios) // Asume Object.fromEntries ya está implementado
};


// Paso 3: Usar Object.entries() y .filter() para eliminar 'datosPrivados' 
// y reconstruir el objeto final (usa la 'infoLimpia' en lugar de 'info' original).


/**
 * b) Desestructuración Anidada con Valor por Defecto.
 * Objetivo: Extraer en una SOLA línea las variables:
 * - 'user' (renombrada de username)
 * - 'notifActivas' (renombrada de notificaciones)
 * - 'idioma' (con valor por defecto 'EN', si no existe en 'info')
 */


// -------------------------------------------------------------------------
// EJERCICIO 3: Encontrar el Elemento con la Mayor Propiedad Anidada
// -------------------------------------------------------------------------

const ciudades = [
    {
        nombre: "Madrid",
        poblacion: 3300000,
        datosClima: {
            temperatura: 15,
            humedad: 70,
            precipitacionAnual: 450 // mm
        }
    },
    {
        nombre: "Londres",
        poblacion: 8900000,
        datosClima: {
            temperatura: 8,
            humedad: 85,
            precipitacionAnual: 600 // mm
        }
    },
    {
        nombre: "Roma",
        poblacion: 2800000,
        datosClima: {
            temperatura: 18,
            humedad: 65,
            precipitacionAnual: 800 // mm
        }
    }
];

/**
 * Encontrar la Ciudad más Lluviosa.
 * Objetivo: Usar .reduce() para iterar sobre el array 'ciudades' y devolver
 * el objeto COMPLETO de la ciudad con la mayor 'precipitacionAnual'.
 * Resultado esperado: El objeto completo de Roma.
 */
