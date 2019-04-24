/**
 * USANDO ARRAYS Y METODOS DE ARRAYS 
 */

// =======================================================================
/**
 * PROGRAMA QUE IMPRIMA LO SIGUIENTE, DONDE NUM ES EL NÚMERO DE COLUMNAS:
 * 1
 * 12
 * 123
 * 1234
 * 12345
 */
const num = 10;

for (let i = 0; i < num; i++) {
    const arrayAux2 = [];
    for (let j = 0; j < i + 1; j++) {
        arrayAux2.push(j + 1);
    }
    console.log(arrayAux2.join(" "));
}
console.log(" ");

// =======================================================================
/**
 *  HACER PIRAMIDE INVERTIDA
 *  12345
 *  1234
 *  123
 *  12
 *  1
 */
const num2 = 10;

for (let i = 0; i < num2; i++) {
    const arrayAux3 = [];
    for (let j = num2 - i - 1; j > -1; j--) {
        arrayAux3.push(j + 1);
    }
    console.log(arrayAux3.join(" "));
}
console.log(" ");

// =======================================================================
/**
 *  HACER UNA PIRAMIDE SIMILAR
 *      1
 *     1 2
 *    1 2 3
 *   1 2 3 4
 *  1 2 3 4 5
 *  DONDE ROWS ES UNA VARIABLE ENTRE 1-25
 */
const rows = 5;

for (let i = 0; i < rows; i++) {
    const arrayAux4 = new Array(rows);
    for (let j = 0; j < i + 1; j++) {
        arrayAux4.fill(" ", 0, (rows - i - 1) / 2); // Añade los espacios para que quede bien
        arrayAux4.push(j + 1); // Calcula el valor
    }
    console.log(arrayAux4.join(" "));
}