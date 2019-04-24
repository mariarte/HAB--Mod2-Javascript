/**
 * TIPOS DE FUNCIONES
 */

/**
 * Denominación de funciones:
    -Un nombre debe describir claramente lo que hace la función.Cuando vemos una llamada de función en el código, un buen nombre al instante nos permite comprender qué hace y qué devuelve. -
    Una función es una acción, por lo que los nombres de las funciones suelen ser verbales. -
    Existen muchos prefijos de funciones bien conocidas como `create ...`, `show ...`, `get ...`, `check ...`
y así sucesivamente.Úsalos para insinuar lo que hace una función.

Las funciones son los principales bloques de construcción de scripts.Ahora hemos cubierto los conceptos básicos, por lo que podemos comenzar a crearlos y usarlos.Pero eso es solo el comienzo del camino.Vamos a volver a ellos muchas veces, profundizando en sus características avanzadas
 */

// =======================================================================
/** FUNCIONES DECLARATIVAS: Se llaman donde se quiera
 * - Los valores pasados a una función como parámetros se copian a sus variables locales.
 * - Una función puede acceder a variables externas. Pero funciona solo de dentro hacia fuera. El código fuera de la función no ve sus variables locales.
 * - Una función puede devolver un valor. Si no lo hace, entonces su resultado es `undefined`.
 * Siempre es más fácil entender una función que obtiene parámetros, trabaja con ellos y devuelve un resultado que una función que no obtiene parámetros, pero modifica las variables externas como un efecto secundario.
 */
function name(params) {
    console.log(params);
}

// =======================================================================
/** FUNCIONES EXPRESIVAS O ANÓNIMAS: Guarda la funcion en una variable
 * - Las funciones son valores. Se pueden asignar, copiar o declarar en cualquier lugar del código.
- Si la función se declara como una declaración separada en el flujo de código principal, se llama "Declaración de función".
- Si la función se crea como parte de una expresión, se llama "Expresión de función".
- Las declaraciones de funciones se procesan antes de que se ejecute el bloque de código. Son visibles en todas partes en el bloque.
- Las expresiones de función se crean cuando el flujo de ejecución las alcanza.

En la mayoría de los casos, cuando necesitamos declarar una función, es preferible una Declaración de función, ya que es visible antes de la declaración en sí. Eso nos da más flexibilidad en la organización del código, y generalmente es más legible.

Por lo tanto, deberíamos usar una Expresión de función solo cuando una Declaración de función no es adecuada para la tarea.
 */
const name2 = function(params) {
    console.log(params);
};
name2("Loquesea"); // Llamada a la función 

function test() {
    // return; // muestra undefined porque no devuelve nada
    return null; // Si no retorna nada es mejor poner null
}
console.log(test()); // Devuelve el resultado de la funcion
console.log(test); // Devuelve el codigo que tiene la funcion dentro

typeof null // Devuelve object que es un error de javascript
typeof NaN // Devuelve number

// =======================================================================
/** ARROWFUNCTION
 * Las funciones de flecha son útiles para las de una sola línea:
 *  1. Sin llaves: `(...args) => expresión` - el lado derecho es una expresión: la función lo evalúa y devuelve el resultado.
 *  2. Con llaves: `(...args) => {cuerpo}` - los corchetes nos permiten escribir varias declaraciones dentro de la función, pero necesitamos un `return` explícito para devolver algo.
 */
const sum = function(num1, num2) { // Es una funcion anonima
    return num1 + num2;
}

const suma = (num1, num2) =>
    return num1 + num2; // Se omite el return SOLO si es en 1 linea
suma(2, 23); // La llamo con la variable

// =======================================================================
// FUNCION QUE ELEVE UNA POTENCIA A 3
const cube = (num1) => num1 ** 3 // Con formato arrowfunction de 1 linea

const cube = num1 => { // Con formato arrowfunction de varias lineas
    console.log("Lo que sea");
    return num1 ** 3;
}