// =======================================================================
/**
 * CLASE STRING / MATH / DATE / ARRAY
 */

// ======================================================================= 
// CLASE MATH
// ======================================================================= 
Math.floor(3.6); // Redondea al minimo más cercano
Math.round(); // Redondea al integro más cercano
Math.trunc(); // Quita los decimales
Math.pow(2, 3); // Realiza la potencia
Math.random(); // Genera un número aleatorio
let num = 4.32324;
num = num.toFixed(2); // Muestra 2 decimales

// =======================================================================
// CLASE STRING 
// ======================================================================= 
let cadena = "lkdfoksdjio";
for (let i = 0; i < cadena.length; i++) {
    // console.log(cadena[i]);
}

for (let letra of cadena) {
    // console.log(letra);
}
cadena.charAt(1); // k
cadena.includes("pepe") // true
    // console.log(cadena.indexOf("z") == -1);
cadena.normalize("NFKD")
    // console.log(cadena.valueOf());

// ======================================================================= 
// CLASE DATE: Librerías para usar: moment js, npm js
// ======================================================================= 
let fecha1 = new Date();
let ahora = Date.now();

// =======================================================================
// CLASE ARRAY 
// ======================================================================= 
// BORRAR LOS ELEMENTOS PARES DE UN ARRAY
let names = ["Pepe", "Rafa", "Tito", "María"];

function borrarPares(names) { // FORMA 1
    let aux = [];
    for (let i = 0; i < names.length; i++) {
        if (i % 2 == 0) {
            aux.push(names[i]);
        }
    }
    return aux;
}
// console.log(names = borrarPares(names));

function borrarPares(names) { // FORMA 2 MÁS SENCILLA
    for (let i = 0; i < names.length; i++) {
        names.splice(i + 1, 1);
    }
}
// console.log(names);

// =======================================================================
// .MAP ==> UNA FUNCION QUE AL PASARLE UN ARRAY DE USERS LOS HAGA TYPE-->ADMIN
let people = [{
        name: "Pepe",
        location: "Coruna",
        type: "user"
    },
    {
        name: "Andrea",
        location: "Madrid",
        type: "user"
    },
    {
        name: "Maria",
        location: "Coruna",
        type: "user"
    },
    {
        name: "Alex",
        location: "Bcn",
        type: "user"
    }
];

let arrayIntroducido = ["Andrea", "Maria"]; // Array que introduce el usuario

function cambioType(arrayIntroducido) {
    let arrayAux = people.map(
        function(user) {
            if (arrayIntroducido.includes(user.name)) { // Devuelve true o false si está incluido en el array inicial
                user.type = "Admin";
                return user;
            }
            return user;
        })
    return arrayAux;
}
// let arraySolucion = cambioType(arrayIntroducido);
// console.log(arraySolucion);

function makeAdmin(users) { // OTRA FORMA DE CAMBIAR EL TYPE
    return users.map((user, i) => {
        if (i % 2 !== 0) user.type = "admin";
        return user;
    });
}
// let res = makeAdmin(people);
// console.log(res);

// =======================================================================
// .FILTER ==> UNA FUNCION QUE AL PASARLE UN ARRAY DE USERS NOS LOS FILTRE POR LA LOCALIZACION QUE LE PASEMOS
function filterByLocation(people, location) {
    return people.filter(
        (user) => {
            if (location == user.location) return true;
            return false;
        }
    )
}
// let res = filterByLocation(people, "Madrid");
// console.log(res);

// =======================================================================
// .REDUCE ==> FUNCION QUE REDUCE PARA DEVOLVER UN SOLO DATO 
let res = [1, 2, 3, 5, 8].reduce((ac, current) => {
    return ac + current;
}, 200); // empezamos en el 200
// console.log(res);