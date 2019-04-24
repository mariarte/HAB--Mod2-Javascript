/**
 * TIPOS DE FUNCIONES
 */

// =======================================================================
// FUNCIONES CON OBJETOS: Las propiedades de los objetos puedes ser String o Symbol(x)
let obj2 = { // Creo un objeto
    name: "Alex",
    oranges: 23,
    apples: 234
};

obj2.name2 = "Pepe" // Si una propiedad no existe te la crea

let loquesea = "apples";
// console.log(obj2[loquesea]); //obj.apples--Daría 234

// =======================================================================
// CREO UN OBJETO "HOTEL" Y HAGO UNA FUNCIÓN QUE BORRE LA PROPIEDAD "TEST" DE ESE OBJETO
let hotel = { // Creación del objeto
    habitaciones: 10,
    puertas: 3,
    salones: 4,
    test: "hola",
};

function borrarPropiedad(objHotel, propiedadABorrar) {
    for (let key in objHotel) {
        if (key === propiedadABorrar) {
            delete objHotel[key]; // Borro la propiedad que le pasemos en el argumento
        }
        // console.log("La key final es-->", objHotel); // Voy mostrando como queda el objeto
    }
}
propiedadABorrar = "test"; // Guardo en una variable cuál propiedad quiero borrar
borrarPropiedad(hotel, propiedadABorrar); // Llamo a la función y le especifico la propiedad a borrar
// console.log(hotel); // Muestro el objeto completo final

// =======================================================================
// ESCRIBIR UNA FUNCIÓN QUE ME DÉ EL TOTAL DE MANZANAS
let apples = { // Creo el objeto
    red: 10,
    green: 23,
    golden: 72,
    yellow: 2
};

function recuentoManzanas(params) {
    let total = 0;
    for (let recuento in params) {
        //console.log(recuento);
        total += params[recuento]; // Voy sumando los valores de cada una de las propiedades del objeto que estamos recorriendo con el bucle
    }
    return total;
}
let res = recuentoManzanas(apples); // Guardo el return de la función en una variable
// console.log(res); // Muestro el valor

// =======================================================================
// CREAR UNA FUNCIÓN QUE MULTIPLIQUE POR 3 TODAS LAS PROPIEDADES NUMÉRICAS DEL OBJETO
let person = {
    kg: 80,
    size: 180,
    name: "Juan"
};

function multipliquePropiedades(obj) {
    for (let key in obj) {
        if (isFinite(obj[key])) {
            // console.log(obj[key]); // Muestra las propiedades que sean número
            obj[key] *= 3;
        }
    }
    return null; // No queremos retornar nada y retornamos null
}
multipliquePropiedades(person);
// console.log(person); // Muestro el objeto completo

// =======================================================================
// FUNCIONES DENTRO DE UN OBJETO
let person9 = {
        name: "María",
        run: function() {
            console.log(`Im ${this.name} and Im running`); // llamar a la variable dentro del scoop, se usa this
        }
    }
    // person9.run(); // Llamada a la funcion

// =======================================================================
// COMO LLAMAR A LA FUNCION DENTRO DE UNA FUNCION SIN LLAMARLA: La metemos entre parétesis y al final otro par de paréntesis (que se usan para los parámetros si los tiene, sino se ponen vacíos). Se suele usar para las funciones init de una aplicación
// (function saludar() {
//     console.log("Hola");
// })()

// =======================================================================
// FUNCION CONSTRUCTORA: Sirve para crear objetos -- En la sintaxis se escribe con mayusculas la primera letra
function Person(name, lastName, country = "Spain") {
    this.name = name;
    this.lastName = lastName;
    this.country = country;
    this.fullName = function() {
        return this.name + " " + this.lastName;
    }
}

let person1 = new Person("Murillo", "Ferreira", "Brazil");
let person2 = new Person("María", "Arteaga");
let person3 = new Person("Juan", "Sanchez");
// console.log(person1.fullName);
// console.log("p", person1);

// =======================================================================
// CREAR UN OBJETO PERSONAJE QUE TENGA UN CONTADOR DE VIDA Y QUE TENGA DOS METODOS --> INCREASELIFE QUE INCREMENTA LA VIDA EN 50 PUNTOS Y DECREASELIFE QUE LA BAJA EN 5O. TIENE QUE TENER OTRA FUNCION QUE MUESTRE LA VIDA TOTAL
let personaje = {
    contadorVida: 100,
    increaselife: function() {
        this.contadorVida += 50;
        return this;
    },
    decreaselife: function() {
        this.contadorVida -= 50;
        return this;
    },
    showLife: function() {
        console.log(this.contadorVida);
    }
};
// personaje.increaselife().increaselife().decreaselife().showLife(); //150
// console.log(personaje.contadorVida);

// =======================================================================
// CREAR UNA FUNCION CONSTRUCTORA QUE CREE UN OBJETO ACUMULADOR USANDO LA FUNCION CONSTRUCTORA ACUMULADOR CON UN VALOR INICIAL . ESE OBJETO DEBE TENER UN METODO "INTRODUCE" QUE TE SALTA UN PROMPT Y TE LO SUMA EN EL ACUMULADOR
function CreaObjetoAcumulador(valorInicial) {
    this.valorInicial = valorInicial;
    this.introduce = function() {
        let var_user = +prompt("Introduce un valor");
        this.valorInicial += var_user;
        //console.log(this.valorInicial);
        return this;
    }
}
// let ac = new CreaObjetoAcumulador(4);
// console.log(ac); // Muestro el objeto creado
// ac.introduce();
// console.log(ac.valorInicial); // Muestro el valor que se ha incrementado