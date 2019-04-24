/**
 * USO DE SWITCH:
 * Una instrucción `switch` puede reemplazar múltiples cheques `if`.
 * Proporciona una forma más descriptiva de comparar un valor con múltiples variantes.
 * 
 * switch (key) {
    case value:
        break;
    case value2:
        break;
    default:
        break;
}
 */

// =======================================================================
// SINTAXIS SWITCH
let key = "Pepe";
switch (key) {
    case "Pepe":
        console.log("Hola Pepe");
        break; // Pasa al siguiente case

    case "Luis":
        console.log("Hola Luis");
        break;

    default:
        console.log("Hola default");
        break;
}

// =======================================================================
/* UN PROMPT QUE TE PREGUNTE LA EDAD, SI ERES:
    <18 QUE MUESTRE "ERES UN NIÑO"
    SI ERES >18 "PUEDES VOTAR"
*/
let edad = +prompt("Introduce tu edad");
switch (edad) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        console.log("Eres un niño");
        break; // Pasa al siguiente case

    default:
        console.log("Puedes votar");
        break;
}

// =======================================================================
// PASAR ESTE CODIGO DE IF A SWITCH
/* let browser = +prompt("Dime un browser");
if (browser == "Vivaldi") {
    console.log("El mejor browser del mundo!");
}
if (browser == "IE") {
    console.log("eeeeeeeeeewwwwwwwww");
}
if (browser == "Chrome" || browser == "Mozilla") {
    console.log("Estan bien");
} */

let browser = prompt("Dime un browser");
switch (browser) {
    case "Vivaldi":
        console.log("El mejor browser del mundo!");
        break; // Pasa al siguiente case

    case "IE":
        console.log("eeeeeeeeeewwwwwwwww");
        break;

    case "Chrome":
    case "Mozilla":
        console.log("Estan bien");
        break;
}