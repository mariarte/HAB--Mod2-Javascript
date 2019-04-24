"use strict"; // lo pongo siempre para que sea estricto

// =======================================================================
/**
 * USO DE TYPEOF
 */
typeof(name2); // Devuelve el tipo de variable. 
// Si es null devuelve object pero es un error de Javascript

// =======================================================================
/**
 * METODOS PARA CONVERSIONES
 */

// METODO PARA PASAR A STRING
let valorBoolean = false;
valorBoolean.toString // Forma 1
String(valorBoolean) // Forma 2
`"" + valorBoolean` // Forma 3

// METODO PARA PASAR A NUMBER
let age = 9;
Number(age); // Forma 1
age = +prompt("Introduce tu edad"); // Forma 2
let sum = +skates + +longBoards; // Pasa las variables a number y luego las suma
Number(undefined); // NaN
Number(null); //
Number(false); // 0
Number(true); // 1
Number(""); // 0
Number("a"); // NaN
Number("    1    "); // 1

// METODO PARA PASAR A BOOLEAN
Boolean(valorBoolean);
Boolean(1); // true
Boolean(0); // false
Boolean("Hola"); // true
Boolean(""); // false
Boolean("0"); // true

/* OTRAS CONVERSIONES
`undefined` -> `NaN`
`null` -> `0`
`true/false` -> `1/0`
`string` -> si tiene contenido da `NaN` y una cadena vacía se convierte en `0`
*/