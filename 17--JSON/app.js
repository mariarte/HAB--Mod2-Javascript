// =======================================================================
/**
 * JSON
 **/
// =======================================================================

// =======================================================================
// METODO PARA PASAR DE OBJETO A JSON (.stringify)
let obj = {
    name: "Pepe",
    age: 40
};
let json = JSON.stringify(obj);
console.log(typeof json);

// =======================================================================
// METODO PARA PASAR DE JSON A OBJETO (.parse)
let newObj = JSON.parse(json);
console.log(typeof newObj);