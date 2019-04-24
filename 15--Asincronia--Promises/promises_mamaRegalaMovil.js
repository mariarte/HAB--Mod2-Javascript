var isMomHappy = true;

// Promise
function willIGetNewPhone() {
    /**
     * 3. Esta función es llamada, nos encontramos con un console.log y mostramos el mensaje
     */
    console.log("entrando en willIGetNewPhone");
    /**
     * Aquí se devuelve la promise y entra ya en modo asincrono (como si fuese un setTimeout)
     * por lo tanto pasa el control para seguir ejecutando otras cosas (mensaje de after asking mom se muestra aqui)
     */
    return new Promise(function(resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: "Samsung",
                color: "black"
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error("mom is not happy");
            reject(reason); // reject
        }
    });
}

function showOff(phone) {
    return new Promise(function(resolve, reject) {
        var message =
            "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone";

        resolve(message);
    });
}

// call our promise
// call our promise
var askMom = function() {
    /**
     * 2. Esta función es llamdaa y tiene un console.log, todo síncrono hasta aquí. Se muetra por pantalla
     * el siguiente mensaje
     */
    console.log("before asking Mom"); // log before

    /**
     * Javascript se encuentra con una función, la llama
     */
    willIGetNewPhone()
        .then(showOff)
        .then(function(fulfilled) {
            console.log(fulfilled);
        })
        .catch(function(error) {
            console.log(error.message);
        });
    console.log("after asking mom"); // log after
};

/**
 * 1. Javascript se encuentra con esta function. La llama.
 */
askMom();