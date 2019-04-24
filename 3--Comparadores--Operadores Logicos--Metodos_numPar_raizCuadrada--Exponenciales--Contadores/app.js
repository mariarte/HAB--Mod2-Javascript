// =======================================================================
/**
 * OPERADORES
 */

let num = 2;
num = +num; // Lo pasa a Number

let skates = "2";
let longBoards = "4";
let sum = +skates + +longBoards; // Pasa las variables a number y luego opera con ellas

let ab, cd, ff;
ab = cd = ff = 2 + 3; // Se asigna el mismo valor a las 3 variables

let num1 = 2;
let num2 = 2;
let num3 = 2 - (num1 = num2 + 1);

// COMPRUEBA SI UN NÚMERO ES PAR
let valor1 = 2;
if (valor1 % 2 == 0) {
    console.log("Numero par");
}

// VALORES EXPONENCIALES
2 ** 2 // Devuelve 4
2 ** 3 // Devuelve 8
2 ** 4 // Devuelve 16  (2 * 2 * 2 * 2) 

// METODO RAIZ CUADRADA
let newNum = Number(num);
4 ** (1 / 2); // Forma 1
Math.sqrt(4); // Forma 2 (+entendible por otros programadores)

// FORMAS INCREMENTAR / DECREMENTAR CONTADORES
let contador = 1;
let newContador = 0;
let newContador2 = 0;
newContador = contador++; // newContador vale 1 porque guarda el valor antiguo
newContador2 = ++contador; // contador vale 2 porque lo incrementa y luego lo muestra
contador += 1 // Es igual que contador = contador + 1

console.log(`contador es -> ${newContador} y contador2 es ->  ${newContador2}`);

let cont = 1;
console.log(3 * ++cont); // Devuelve 6
console.log(3 * cont++); // Devuelve 3

// =======================================================================
/**
 * OTROS OPERADORES
 */
console.log("2" > 1); // True
console.log("01" == 1); // True
console.log(null == undefined); // True
console.log(null === undefined); // False
console.log(false === false);

console.log(null < 0); // False
console.log(null == 0); // False
console.log(null >= 0); // True

console.log(undefined > 0); // False
console.log(undefined < 0); // False
console.log(undefined == 0); // False

// "a" < "b" ==> Lo compararía por valores ASCII

// =======================================================================
/**
 * OPERADORES LOGICOS
 */

// OR || -> Devuelve TRUE, si alguna de sus condiciones sea TRUE
alert(true || true); // True
alert(true || false); // True
alert(false || true); // True
alert(false || false || false); // False

// AND && -> Devuelve TRUE, si todas sus condiciones son TRUE
//        -> Devuelve FALSE. si alguna de sus condiciones son FALSE
alert(true && true); // True
alert(true && false); // False
alert(false && true); // False
alert(false && false); // False

// && (AND) TIENE PREFERENCIA ANTES QUE || (OR)

let isNumber = isFinite(3) && isFinite(NaN);
let num = 0;
if ((num >= 10 && num <= 12) || (num >= 20 && num <= 22)) {}

false && alert("wtf!"); //

if (false) {
    alert("loque sea");
}

// ! NOT OPERADOR NEGACIÓN
let isTall = true;
isTall = !isTall;

let isRed = 0;
isRed = !isRed;

alert(!!"hola"); // true
alert(Boolean("Hola")); // true