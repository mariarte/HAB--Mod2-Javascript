"use strict"; // lo pongo siempre para que sea estricto

console.log("Hola");
alert("Hola soy Maria"); // Alerta que se ejecuta en el script
console.log("Hola segundo");

// =======================================================================
/**
 * CREACION DE VARIABLES
 */
var nameClient = "Pepe"; // Variable global --- NO USAR POR EL PROBLEMA DE HOISTING
let middleName = "lo que sea"; // Variable que respeta el scoop
const lastName = "Rodriguez"; // Variable pero el valor es constante

// Se crea como "const" cuando se sabe el valor previamente (harcodeada) y no va a cambiar durante todo el flow
const COLOR_WHITE = "#ffffff";
const PI = Math.PI;

const secondToLoad = 3; // Variable constante que se calcula una vez que el usuario abra la pagina

// =======================================================================
/**
 * TIPOS DE VARIABLES
 */

// 1.- STRING
const name = "holi";
const name2 = 'holi';
const name3 = `holi`; // Backstick (muestra el contenido según se escribe, respetando espacios)
console.log('Esto es un texto con "comillas"');
console.log("Mi nombre es " + name + "\n"); // Salto de linea
console.log(`Mi nombre es ${ name }`);

// 2.- NUMBER: Números de cualquier tipo, enteros, decimales...
let num = 4.5;
console.log(Infinity); // Infinito
console.log(-Infinity); // Infinito
// const INFINITY = Nan; // Not a number
typeof("hola") // Devuelve el tipo y en este caso es string
isFinite(2 / "hola"); // Devuelve un false

// 3.- BOOLEANOS
let verdadero = true; // 1, 2, 3, " "
let falso = false; // 0, ""

if (2 < 4) {
    console.log("Mensaje");
}

// 4.- NULL: Para valores desconocidos
let name4 = null; // Existe pero con valor null

// 5.- UNDEFINED: Valores no asignados
let lastNameOther = undefined; // No existe

// 6.- OBJETOS
let obj = {};
let person = {
    name: "Pepe",
    eyesColor: "brown",
    age: 23;
    address: {
        street: "Calle Nicaragua",
        number: 8;
    }
}

person.hasDog = true; // Crea el campo dentro del objeto aunque no exista
person.age = 20;
/* person.noExiste.yEsteTampoco = true; // Da error porque la primera variable no esta creada pero la crea y la segunda no la crea porque la primera no existia
console.log(person.noExiste.yEsteTampoco); */

// 7.- ARRAY
let dogList = [];
let dogList2 = ["valor1", "valor2", 2, { name: "person" }, false];

// 8.- SYMBOL: Usado para identificadores únicos
let id = Symbol("id"); // Para crear un id unico
console.log(id);

// =======================================================================
/**
 * TIPOS DE VALOR FALSY
 *   
 * undefined
 * null
 * ""
 * 0
 */

/**
 * TIPOS DE VALOR TRUTHY
 *   
 * "3" // Valores con contenido, no vacíos...
 */