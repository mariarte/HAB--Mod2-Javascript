// =======================================================================
/**
 * ASINCRONÍA:
 **/
// =======================================================================
// FUNCION QUE NOS PONGA HOLA CUANDO PASEN 3 SEGUNDOS   
// setTimeout(function() { // Timeout en milisegundos
//     console.log("Hello BOSers!");
// }, 3000);

// setInterval(() => { // Crea un intervalo que no para
//     console.log("Adios");
// }, 2000);

// =======================================================================
// LLAMANDO A OBJ HOLA...QUE NOS MUESTRE EL MENSAJE PASADOS 3 SEGUNDOS
let obj = {
        name: "Pepe",
        hola: function() {
            setTimeout(() => { // Para que funcione con el this hay que usar arrow-function (porque hace 2 saltos hacia atras)
                console.log("Hello " + this.name);
            }, 3000);
        }
    }
    // obj.hola(); // Llamo a la funcion de dentro del objeto

// =======================================================================
// CALLBACKS: Funcion que se pasa como parámetro a otra función
function checkAge(age, accept, decline, test) {
    if (age <= 18) {
        decline();
    } else {
        accept();
    }
}

function accept() {
    console.log("Todo ok");
}

function decline() {
    console.log("NO puedes");
}
// checkAge(16, accept, decline); // Llamada

// =======================================================================
// CALLBACKS: FUNCIÓN QUE IMPRIME POR PANTALLA EL RESULTADO DE UNA SUMA, LLAMANDO A OTRA FUNCION COMO PARÁMETRO
function print2(n) {
    console.log(n);
}

function sumar2(n1, n2, p) {
    setTimeout(function() {
        p(n1, n2);
    }, 3000);
}

// sumar2(20, 5, print2); // IMPORTANTE: La funcion se llama sin (), para que no se invoque directamente a la funcion 

// =======================================================================
// OTRA FORMA DE HACER LO MISMO, PERO LLAMANDO A LA FUNCION ANÓNIMA COMO CALLBACK
function sumar(n1, n2, callback) {
    callback(n1 + n2);
}

// sumar(3, 4, function(n) { // Llamada a la funcion
//     console.log(n);
// });

// =======================================================================
// OTRA FORMA DE HACER LO MISMO, PERO LLAMANDO A LA FUNCION COMO ARROW-FUNCTION
sumar(3, 4, (n) => { // Llamada a la funcion, usando arrow-function
    console.log(n);
});

// =======================================================================
// CALLBACKS: EJERCICIO DE TIMER
function timer(callback) {
    console.log('hola');
    setTimeout(() => {
        callback('RING');
    }, 2000);
}

timer(function(r) {
    console.log(r);
});

console.log('FIN');

function regresar(X) {
    console.log(X);
}

timer(regresar);

// =======================================================================
// FOREACH: Siempre hay que pasarle una funcion callback como parametro
const abc = ['A', 'B', 'C', 'D', 'E', 'F'];
abc.forEach(function(value) {
    console.log(value);
});

// Tambien le mandamos la posicion 
const abcd = ['A', 'B', 'C', 'D', 'E', 'F'];
abcd.forEach(function(value, p) {
    console.log(value, p);
});