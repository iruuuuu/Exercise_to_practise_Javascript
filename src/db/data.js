// ===========================================
//  EJERCICIOS DE ARRAYS Y ARRAYS DE OBJETOS
// ===========================================

export const usuarios = [{
    id: 1,
    nombre: "Ana García",
    email: "ana.garcia@example.com",
    edad: 28,
    activo: true,
    ciudad: "Madrid",
    nivel: "Junior",
    hobbies: ["Lectura", "Senderismo", "Cocina"],
}, {
    id: 2,
    nombre: "Luis Martínez",
    email: "luis.martinez@example.com",
    edad: 45,
    activo: false,
    ciudad: "Barcelona",
    nivel: "Senior",
    hobbies: ["Fotografía", "Viajar"],
}, {
    id: 3,
    nombre: "Sofía Pérez",
    email: "sofia.perez@example.com",
    edad: 22,
    activo: true,
    ciudad: "Valencia",
    nivel: "Trainee",
    hobbies: ["Videojuegos", "Series", "Lectura"],
}, {
    id: 4,
    nombre: "Javier López",
    email: "javier.lopez@example.com",
    edad: 35,
    activo: true,
    ciudad: "Madrid",
    nivel: "Mid",
    hobbies: ["Cocina", "Fútbol", "Senderismo"],
}, {
    id: 5,
    nombre: "Elena Rodríguez",
    email: "elena.rodriguez@example.com",
    edad: 50,
    activo: false,
    ciudad: "Sevilla",
    nivel: "Senior",
    hobbies: ["Jardinería", "Lectura"],
}, {
    id: 6,
    nombre: "David Fernández",
    email: "david.fernandez@example.com",
    edad: 30,
    activo: true,
    ciudad: "Barcelona",
    nivel: "Mid",
    hobbies: ["Programación", "Senderismo"],
}, ];

export const productos = [{
    id: 101,
    nombre: "Laptop Pro",
    categoria: "Electrónica",
    precio: 1200.0,
    stock: 15,
    valoracion: 4.8,
    etiquetas: ["portátil", "potente", "gama-alta"] // Agregado para Ej. 7
}, {
    id: 102,
    nombre: "Teclado Mecánico",
    categoria: "Electrónica",
    precio: 85.5,
    stock: 50,
    valoracion: 4.5,
    etiquetas: ["periférico", "gamer"] // Agregado para Ej. 7
}, {
    id: 103,
    nombre: "Camiseta Algodón",
    categoria: "Ropa",
    precio: 25.0,
    stock: 120,
    valoracion: 3.9,
    etiquetas: ["básica", "verano"] // Agregado para Ej. 7
}, {
    id: 104,
    nombre: "Pantalón Vaquero",
    categoria: "Ropa",
    precio: 65.99,
    stock: 40,
    valoracion: 4.2,
    etiquetas: ["casual"] // Agregado para Ej. 7
}, {
    id: 105,
    nombre: "Smartphone Lite",
    categoria: "Electrónica",
    precio: 450.0,
    stock: 30,
    valoracion: 4.1,
    etiquetas: ["móvil", "básico"] // Agregado para Ej. 7
}, {
    id: 106,
    nombre: "Libro de Ficción",
    categoria: "Libros",
    precio: 18.5,
    stock: 200,
    valoracion: 4.7,
    etiquetas: ["literatura"] // Agregado para Ej. 7
}, ];

export const pedidos = [{ // Necesario para Ejercicio 4
    idPedido: 1001,
    idUsuario: 1,
    estado: "completado",
    fecha: new Date("2024-05-10"),
    metodoPago: "Tarjeta",
    productos: [{
        idProducto: 101,
        cantidad: 1,
        precioUnitario: 1200.0
    }, {
        idProducto: 102,
        cantidad: 2,
        precioUnitario: 85.5
    }, ]
}, {
    idPedido: 1002,
    idUsuario: 3,
    estado: "pendiente",
    fecha: new Date("2024-05-15"),
    metodoPago: "Paypal",
    productos: [{
        idProducto: 105,
        cantidad: 1,
        precioUnitario: 450.0
    }, {
        idProducto: 103,
        cantidad: 5,
        precioUnitario: 25.0
    }, ]
}, {
    idPedido: 1003,
    idUsuario: 6,
    estado: "enviado",
    fecha: new Date("2024-06-01"),
    metodoPago: "Tarjeta",
    productos: [{
        idProducto: 106,
        cantidad: 10,
        precioUnitario: 18.5
    }, ]
}, ];


// ===============================
//  EJERCICIOS DE MAP Y SET
// ===============================

export const numeros = [10, 25, 30, 10, 5, 25, 40, 50, 10, 5]; // Necesario para Ejercicio 9

export const coloresPrimarios = new Set(["rojo", "azul", "amarillo", "verde"]); // Necesario para Ejercicio 8
export const coloresSecundarios = new Set(["verde", "naranja", "morado", "azul", "negro"]); // Necesario para Ejercicio 8

export const ciudadesPoblacion = new Map([ // Necesario para Ejercicio 8
    ["Tokyo", 13900000],
    ["Londres", 8900000],
    ["Nueva York", 8400000],
    ["Shanghai", 26300000],
    ["Madrid", 3300000],
    ["Barcelona", 1600000],
]);


// ===============================
//  EJERCICIOS DE LOCALSTORAGE
// ===============================

export const palabras = ["JavaScript", "HTML", "CSS", "Array", "Map", "Set", "LocalStorage"]; // Necesario para Ejercicio 12