/**
 * USO DE BUCLES
 * `while` - La condición se verifica **antes** de cada iteración.
 * `do..while` - La condición se verifica **después** de cada iteración.
 * `for (;;)` - La condición se verifica **antes** de cada iteración.
 * 
 * Para hacer un bucle "infinito", usamos `while(true)`. Puede detenerse con `break`.
 * Si queremos pasar a la siguiente iteración usamos `continue`.
 * `break / continue` admite etiquetas antes del bucle. Así podemos hacer un break o continue al bucle que queramos mediante su etiqueta.
 */

// =======================================================================
/**
 * USO DE WHILE
 */

// EJEMPLO DE USO DE WHILE
let cont = 0;
while (cont <= 3) {
    console.log(cont);
    cont++;
}

// EJEMPLO DE WHILE USANDO BREAK
let cont2 = 1;
while (true) {
    console.log(cont2);
    cont2++;
    if (cont2 == 3) {
        break;
    }
}

// EJEMPLO WHILE USANDO FLAG
let flag = false;
while (true) {
    console.log("Hola");
    flag = true;
    if (flag == true) {
        break;
    }
}

// EJEMPLO USANDO CONTADOR DECRECIENDO
let cont3 = 5;
while (cont3) {
    console.log(cont3);
    cont3--;
    if (cont3 == 0) break;
}

// CUAL ES EL ULTIMO VALOR QUE ALERTA ESTE BLOQUE:
let i = 4;
while (i) {
    alert(i--); // El último valor es 1 porque 0 seria false y no entraría en el while
}

// QUE VALORES ALERTA ESTE BLOQUE
let i = 0;
while (++i < 3) alert(i); // Devuelve los valores: 1, 2

// QUE VALORES ALERTA ESTE BLOQUE
let x = 0;
while (x++ < 3) alert(x); // Devuelve los valores: 1, 2, 3. Porque el incremento es despues

// =======================================================================
/**
 * USO DE DO...WHILE
 */

// EJEMPLO DE USO DE DO...WHILE (Se ejecuta mínimo 1 vez)
do {
    console.log("Hola");
} while (false);

// EJEMPLO DO...WHILE USANDO CONTADOR
let limit = 0;
do {
    console.log(limit);
    limit++;
} while (limit < 5);

// =======================================================================
/**
 * USO DE FOR
 */

// SINTAXIS DE FOR
let array = [
    { name: "Pepe", isAdmin: true },
    { name: "Julia", isAdmin: false },
    { name: "Sancho", isAdmin: true },
    { name: "Paco", isAdmin: false },
    { name: "Abel", isAdmin: true }
];
console.log("La length es -> ", array.length);
for (let i = 0; i < array.length; i++) {
    if (array[i].isAdmin) {
        console.log(array[i].name);
    }
}

// USO DE FOR CON DIFERENTES FORMAS DE HACER LO MISMO
let array = [
    { name: "Pepe", isAdmin: true },
    { name: "Julia", isAdmin: false },
    { name: "Sancho", isAdmin: true },
    { name: "Paco", isAdmin: false },
    { name: "Abel", isAdmin: true }
];

for (let i = 0; i < array.length; i++) { // Cambiar el nombre a los users que no sean admins a "default" y saltarse a los admins usando continue
    if (array[i].isAdmin) continue;
    array[i].name = "default";
}

for (let i = 0; i < array.length; i++) { // Cambiar el nombre a los users que no sean admins a "default" y saltarse a los admins usando continue
    if (array[i].isAdmin == false) {
        array[i].name = "default";
    }
}

/* TENIENDO X => N......N+ (PUEDE SER CUALQUIER NUMERO POSITIVO)
HACER UN CODIGO QUE MUESTRE LOS NUMEROS PRIMOS DE X
HAY QUE VALIDAR QUE SEA NUMERO Y QUE SEA POSITIVO
 */
let valor = +prompt("Introduce un valor:", "");
let valor = 10
exterior: for (let i = 2; i <= valor; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue exterior;
        }
    }
    console.log(`Numero primo ${i}`);
}