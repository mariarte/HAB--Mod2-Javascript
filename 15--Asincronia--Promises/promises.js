/**
 * PROMISES
 */

// =======================================================================
// SINTAXIS DE CREACION DE PROMESAS
let promesa = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("Los datos me han llegado correctamente");
    }, 1000);
});
promesa.then(resultado => console.log(resultado));

// =======================================================================
// CREO UNA PROMESA CON 2 TIPOS DE RESOLUCIÓN
let promise = new Promise(function(resolve, reject) {
    let array = ["Pepe", "María", "Luisa"];

    if (array.includes("Pepe")) {
        resolve("Tiene a Pepe");
    }
    reject(new Error("No se ha encontrado a Pepe"));
});
// promise.then(resultado => console.log(resultado)) // Si me llegan los datos
//     .catch(err => console.log(err)); // Si no me llegan...da error

// =======================================================================
// PIDO LOS DATOS A UNA API QUE DEVUELVE UN USUARIO ALEATORIO
// fetch("https://randomuser.me/api/")
//     .then(res => {
//         return res.json(); // Devuelve una promise
//     })
//     .then(data => console.log(data))
//     .catch(e => console.log("Error", e));

// =======================================================================
// UNA FUNCION QUE TENGA UN SET TIME OUT DE 2 SEGUNDOS QUE DEVUELVA UNA RESPUESTA AL PASARLE UNA URL Y LLAMAR A UN API PUBLICO (QUE ES ESA URL)
function pedirDatos(url) {
    setTimeout(() => {
        return fetch(url)
            .then(res => {
                return data;
            })
            .then(data => data)
            .catch(err => console.log("No tenemos respuesta,e"));
    }, 2000);
}
// let data = pedirDatos("https://randomuser.me/api/");
// console.log(data)

// =======================================================================
// UNA FUNCION TESTNUM QUE LE PASAS UN PARÁMETRO Y RETORNA UNA PROMISE QUE COMPRUEBA QUE EL VALOR SEA MAYOR QUE 10, SINO LA RECHAZA
console.log('------------------------------------------------------');

function testNum(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            return resolve('PERFECTO...NÚMERO CORRECTO');
        } else if (num <= 10) {
            return reject(new Error(`"${num}" debe ser mayor a 10`));
        }
    });
}

testNum(55)
    .then((status) => {
        console.log('Status: ', status);
    })
    .catch((err) => {
        console.error('Error', err.message);
    });
console.log('------------------------------------------------------');

// =======================================================================
// ESCRIBIR DOS FUNCIONES QUE USEN PROMISES QUE PUEDAS ENCADENAR. LA PRIMERA FUNCION SE LLAMA TRANSFORMTOCAPS(), QUE TOMARÁ UN ARRAY DE PALABRAS Y LAS PASARÁ A MAYÚSCULAS. Y LA SEGUNDA FUNCIÓN ORDERWORDS(), QUE ORDENARÁ LAS PALABRAS POR ORDEN ALFABÉTICO. SI EL ARRAY TIENE ALGÚN DATO QUE NO SEA STRING DEBE LANZAR UN REJECT.



// =======================================================================
// async function example() { //hacer asincrono para no tener que crear promesas
//     let data = await pedirDatos("https://randomuser.me/api/");
//     return Promise.resolve(data);
// }

// //resultado
// example().then(data => console.log(data));

// let data = await example();

// =======================================================================
// FUNCION QUE PIDA NUESTROS DATOS DE GITHUB    
// Forma más nueva. Se declara la funcion asincrona y podemos usar await
// async function gitHubExample(url = "https://api.github.com/users/mariarte") {
//     try {
//         let res = await fetch(url);
//         let user = await res.json();
//         console.log(user);
//     } catch (e) {
//         console.log(e);
//     }
// }
// gitHubExample(); // Llamada