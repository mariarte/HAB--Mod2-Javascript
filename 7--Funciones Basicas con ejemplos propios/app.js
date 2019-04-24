/**
 * USO DE FUNCIONES
 */

// =======================================================================
// SINTAXIS FUNCIONES
function getPepe() {
    console.log("Soy Pepe");
}
// En una funcion si no hay un return, se retorna UNDEFINED

function sum(num1, num2) {
    return num1 + num2;
}
// sum(3, 2); // LLAMADA A LA FUNCIÓN

// =======================================================================
/** FUNCION QUE AVERIGUE SI UN NÚMERO ES PAR
 * @description: Función que se le pasa un número y retorna true o false, dependiendo si es número par o no
 * @param: 
 *      num: Se pasa un número, que es el que vamos a comprobar en la función
 * @return: Retorna un valor booleano
 *      true, si el número es par
 *      false, si el número NO es par
 */
function isEven(num) {
    if (user.isAdmin == false) return "No tienes permisos"; // Si el usuario no es Admin...no tiene permisos
    if (num % 2 == 0) {
        return true;
    }
    return false;
}

// =======================================================================
/** FUNCION QUE VALIDE QUE SOLO SE ADMITAN NÚMEROS
 * @description: Función que se le pasa un número y comprueba que sea tipo number
 * @param: 
 *      num: Se pasa un número, que es el que vamos a comprobar en la función si es número o no
 */
function isNumber(num) {
    let number = isFinite(true);
}

// ======================================================================= 
/** FUNCION QUE ACEPTE DOS PARÁMETROS X y N PARA QUE DEVUELVA EL RESULTADO DE X ELEVADO A N
 * @description: Función que calcula la potencia de un número dado
 * @param:
 *      x: Le pasamos el número que queremos elevar
 *      n: Le pasamos el número que es la potencia a la que vamos a elevar
 * @return: Retorna un valor
 *      resultado: Es el valor que da despues de calcular la potencia
 */
function elevarPotencia(x, n) {
    let resultado = x;
    for (let i = 1; i < n; i++) {
        resultado *= x
    }
    return resultado;
}
// let resultado = elevarPotencia(2, 3); // 2 * 2 * 2 // Llamada a la función
// console.log(resultado);

// =======================================================================
/** FUNCION QUE CALCULE EL CAMBIO DE MONEDA DE EURO A DÓLARES. RECIBE EUROS Y DEVUELVE DOLARES
 * @description: Función que hace una conversion de euro --> dolar
 * @param:
 *      eur: Le pasamos el valor en euros que queremos convertir
 * @return: Retorna un valor
 *      result: Es el resultado de la conversion a dólares
 */
function euroToDolar(eur) {
    let result = 0;
    let euros = eur;
    result = euros * 1.128;
    return result;
}
// let result = euroToDolar(2); // Llamada a función y lo guardo en variable
// console.log(result);

// =======================================================================
/** FUNCION QUE RECIBA UN NOMBRE DE PERSONA DE CUALQUIER FORMA TIPO --> "    rUbEn   " Y TE LO DEVUELVA CON UN BUEN FORMATO --> "Ruben"
 * @description: Función que formatea un texto correctamente
 * @param:
 *      str: Le pasamos el nombre con el formato sin formatear, p.j "   mARia  "
 * @return: Retorna un valor string
 *      nombre: Es el nombre ya formateado correctamente, p.j "Maria"
 */
function textoFormatCorrecto(str) {
    let nombre = str
    nombre = nombre.trim().toLowerCase(); // Quito espacios y lo paso a minúsculas
    let caracter = nombre.charAt(0).toUpperCase(); // Extraigo caracter 1 y lo paso a mayusculas
    let resto = nombre.slice(1); // Guardo el resto de la palabra
    nombre = caracter + resto; // Concateno todo en la misma palabra
    return nombre;
}
// let nombreCorrecto = textoFormatCorrecto("   mARiA  ");
// console.log("*" + nombreCorrecto + "*");

// ======================================================================= 
/** FUNCION QUE QUITE LOS ESPACIOS EN BLANCO DE UNA FRASE
 * @description: Función que quita todos los espacios en blanco que hay en una frase, incluido los que hay entre palabras de en medio
 * @param:
 *      str: Le pasamos la frase que queremos quitar espacios
 * @return: Retorna un valor
 *      frase: Devuelve un string con todos los caracteres sin espacios
 */
function quitaEspacios(str) {
    let caracter = ""; // Guarda cada caracter que vaya extrayendo con el bucle
    let frase = ""; // Guarda la nueva frase sin espacios
    for (let i = 0; i <= str.length; i++) {
        caracter = str.charAt(i);
        if (caracter !== " ") {
            frase = frase + caracter;
            //console.log(frase);
        }
    }
    return frase;
}
// console.log(quitaEspacios("Hola y adios")); // Llamada a la función

// =======================================================================
/** FUNCION PARA DAR LA VUELTA UNA FRASE
 * @description: Función que hace un reverse de una frase completa
 * @param:
 *      str: Le pasamos la frase que queremos dar la vuelta
 * @return: Retorna un valor
 *      sentence: Devuelve la frase invertida
 */
function reverse(str) {
    let sentence = "";
    for (let i = str.length - 1; i >= 0; i--) {
        sentence = sentence + str[i];
    }
    return sentence;
}
// console.log(reverse("coderbyte")); // Llamada a la función

// =======================================================================
/** FUNCION QUE RECIBE UN STRING CUALQUIERA Y TE DICE SI ES PALINDROMO O NO. SE LEE IGUAL DE IZQUIERDA A DERECHA QUE DE DERECHA A IZQUIERDA
 * @description: Función que comprueba si una frase es palíndromo o no
 * @param:
 *      frase: Le pasamos la frase que comprueba si es palindromo
 * @return: Retorna un valor booleano
 *      true, si es palindromo
 *      false, no es palindromo
 */
function palindromo(frase) {
    frase = frase.toLowerCase(); // Lo paso a minuscula
    frase = quitaEspacios(frase); // Llamo a mi funcion (quitar espacios de frase)
    let fraseReves = reverse(frase); // Llamo a mi funcion para dar la vuelta a la frase
    if (frase === fraseReves) {
        return "SI es palindromo"; // True
    } else {
        return "NO es palindromo"; // False
    }
}
// console.log(palindromo("Somos o no somos"));
// console.log(palindromo("No traces en ese cartón"));

// =======================================================================
/** FUNCION CREAR UN FACTORIAL
 * @description: Función que calcula el factorial de un número dado
 * @param:
 *      num: Le pasamos el número que hacemos el factorial
 * @return: Retorna el resultado de la operación
 */
function FirstFactorial(num) {
    let resultado = 0;
    if (num == 0) {
        return 1;
    } else if (num > 1) {
        resultado = num * (num - 1);
        return (resultado);
    }
}
// console.log(FirstFactorial(8)); // Llamada de la función

// =======================================================================
/** FUNCION QUE ELEVE UNA POTENCIA A 3
 * @description: Función que con el número dado lo eleva a 3
 * @param:
 *      num1: Le pasamos el número que queremos elevar
 * @return: Retorna el resultado de la potencia 
 *      num1**3
 */
const cube = (num1) => num1 ** 3

// cube (3); // Llamada a la funcion (tipo arrow-function)

// =======================================================================
/** FUNCION QUE DEVUELVE LA PALABRA MÁS LARGA DE UNA FRASE
 * @description: Tenemos una frase compuesta por palabras. Queremos que nos devuelva la palabra más larga o si hay dos iguales, que las devuelva
 * @param:
 *      str: Le pasamos la frase a analizar
 * @return: 
 *      resultWord: Devuelva la palabra más larga
 */
function longestWord(str) {
    var sentenceArray = str.split(' '); // Separa en palabras la frase original
    var resultWord = '';
    for (var i = 0; i < sentenceArray.length; i++) {
        var word = sentenceArray[i];
        // console.log(word);
        if (word.length > resultWord.length) {
            resultWord = word;
        }
    }
    return resultWord;
};
// console.log(longestWord("La palabra máfdgdgfgdfs larga es "));

// =======================================================================
/** FUNCION QUE EN UNA FRASE CAMBIA UNA LETRA POR LA SIGUIENTE EN EL ALFABETO. LAS VOCALES LAS PASA A MAYUSCULA Y DEVUELVE LA FRASE
 * @description: 
 * @param:
 *      str: Le pasamos la frase a analizar
 * @return: 
 *      resultadoStr: Devuelva la frase modificada
 */
function LetterChanges(str) {
    var strMinuscula = str.toLowerCase(); // Lo paso a minuscula
    var newStr = []; // Creo un nuevo array
    console.log("La frase inicial es --> ", strMinuscula);
    for (var i = 0; i < strMinuscula.length; i++) {
        // console.log(strMinuscula);
        if (strMinuscula[i] == "a") {
            newStr.push("b");
        } else if (strMinuscula[i] == "b") {
            newStr.push("c");
        } else if (strMinuscula[i] == "c") {
            newStr.push("d");
        } else if (strMinuscula[i] == "d") {
            newStr.push("E");
        } else if (strMinuscula[i] == "e") {
            newStr.push("f");
        } else if (strMinuscula[i] == "f") {
            newStr.push("g");
        } else if (strMinuscula[i] == "g") {
            newStr.push("h");
        } else if (strMinuscula[i] == "h") {
            newStr.push("I");
        } else if (strMinuscula[i] == "i") {
            newStr.push("j");
        } else if (strMinuscula[i] == "j") {
            newStr.push("k");
        } else if (strMinuscula[i] == "k") {
            newStr.push("l");
        } else if (strMinuscula[i] == "l") {
            newStr.push("m");
        } else if (strMinuscula[i] == "m") {
            newStr.push("n");
        } else if (strMinuscula[i] == "n") {
            newStr.push("O");
        } else if (strMinuscula[i] == "o") {
            newStr.push("p");
        } else if (strMinuscula[i] == "p") {
            newStr.push("q");
        } else if (strMinuscula[i] == "q") {
            newStr.push("r");
        } else if (strMinuscula[i] == "r") {
            newStr.push("s");
        } else if (strMinuscula[i] == "s") {
            newStr.push("t");
        } else if (strMinuscula[i] == "t") {
            newStr.push("U");
        } else if (strMinuscula[i] == "u") {
            newStr.push("v");
        } else if (strMinuscula[i] == "v") {
            newStr.push("w");
        } else if (strMinuscula[i] == "w") {
            newStr.push("x");
        } else if (strMinuscula[i] == "x") {
            newStr.push("y");
        } else if (strMinuscula[i] == "y") {
            newStr.push("z");
        } else if (strMinuscula[i] == "z") {
            newStr.push("A");
        } else {
            newStr.push(strMinuscula[i]);
        }
    }
    let resultadoStr = newStr.join('');
    return resultadoStr;
};
// console.log("El resultado es--> ", LetterChanges("La frase es bonita"));

// =======================================================================
/** FUNCION QUE EN UNA FRASE QUE ESTÁN SEPARADAS LAS PALABRAS POR 1 SOLO ESPACIO...PONE EN MAYUSCULA LA PRIMERA LETRA
 * @description: 
 * @param:
 *      str: Le pasamos la frase a analizar
 * @return: 
 *      resultadoCapitalize: Devuelva la frase modificada
 */
function LetterCapitalize(str) {
    var arrayWords = str.split(' ');
    for (var i = 0; i < arrayWords.length; i++) {
        var arrayLetters = arrayWords[i].split('');
        arrayLetters[0] = arrayLetters[0].toUpperCase();
        arrayWords[i] = arrayLetters.join('');
    }
    let resultCapitalize = arrayWords.join(' ');
    return resultCapitalize;
};
// console.log(LetterCapitalize("La frase esta completa ahora"));

// =======================================================================
/** FUNCION QUE COMPRUEBA SI HAY SIMBOLOS
 * @description: 
 * @param:
 *      str: Le pasamos la frase a analizar
 * @return: 
 *      true
 *      false
 */
function SimpleSymbols(str) {
    var strMayus = str.toUpperCase(); // Lo paso a mayusculas
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Guardo el alfabeto en una varible para poder comparar
    for (var i = 0; i < strMayus.length; i++) { // Recorro el array
        if (alphabet.indexOf(strMayus[i]) != -1) { //Comparo si la letra está incluida en el alfabeto que tengo guardado
            if (strMayus[i - 1] == "+" && strMayus[i + 1] == "+") //If that was true then checks -1 and +1 for "+"
                return true;
        }
    }
    return false;
};

console.log(SimpleSymbols("Hola estamos a tope"));