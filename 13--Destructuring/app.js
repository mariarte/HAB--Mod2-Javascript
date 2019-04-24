// =======================================================================
// DESTRUCTURING: Guardar con variables cada elemento
let arrayNormal = ["Abel", "Pepe", "Maria", "Pepe2"];

let [, , name2, name3] = arrayNormal;

let name1 = arrayNormal[0];
let name2 = arrayNormal[1];

console.log(name2);

let str4 = "RED";
let [a, b, c] = str4;

let arrayNormal = ["Ruben", "Costa"];

let obj4 = ({}[(obj4.name, obj4.lastname)] = arrayNormal);

let obj = {
    window: 100,
    innerHeight: "200px",
    a: 1,
    b: 2,
    c: 3
};

let { window: w = 10, innerHeight, alalalal = 5, ...rest } = obj;

// let w = window

console.log(rest);

console.log("p", person1);