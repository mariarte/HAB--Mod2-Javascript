/**
 * EJERCICIO CREANDO UN TIMER:
 * -- OPCION 1: USANDO CALLBACK
 * -- OPCION 2: USANDO PROMISES 
 * -- OPCION 3: ASYNC / AWAIT
 */

// =======================================================================
// OPCION 1 - EJERCICIO DE TIMER: USANDO CALLBACKS
// function timer(callback) {
//     console.log('hola');
//     setTimeout(() => {
//         callback('RING');
//     }, 2000);
// }

// timer(function(r) {
//     console.log(r);
// });

// console.log('FIN');

// function regresar(X) {
//     console.log(X);
// }

// timer(regresar);


// =======================================================================
// OPCION 2 - EJERCICIO DE TIMER: USANDO PROMISES: Los segundos se guardan en una variable y en formato-segundos...sino es número=>error, sino si los segundos es menos de 0=>error
// function timer(segundos) {
//     return new Promise((resolve, reject) => {
//         console.log('hola');
//         if (!isFinite(segundos)) {
//             return reject(new Error(`"${segundos}" no es un número`));
//         } else if (segundos < 0) {
//             return reject(new Error(`"${segundos}" debe ser mayor a 0`));
//         }

//         setTimeout((segundos) => {
//             return resolve('RING');
//         }, segundos * 1000);
//     });
// }

// let segundosUsuario = 5;
// timer(segundosUsuario)
//     .then((status) => {
//         console.log('Status: ', status);
//     })
//     .catch((err) => {
//         console.error('Error', err.message);
//     });

// console.log('FIN');

// =======================================================================
// OPCION 3 - ASYNC / AWAIT HAY QUE USAR CON PROMISES TODO JUNTO

function sleep(seconds) {
    console.log(`${new Date().toISOString()}: starting timer`);
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(`timer ${seconds} seconds done!`);
        }, seconds * 1000);
    });
}

async function init() {
    try {
        console.log(`${new Date().toISOString()}: ${await sleep(2)}`);
        console.log(`${new Date().toISOString()}: ${await sleep(3)}`);
    } catch (e) {
        console.error(e.message);
    }
}

init();