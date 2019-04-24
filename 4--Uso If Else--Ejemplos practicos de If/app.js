/**
 * USO DE IF
 */
if (2 == 2) {
    let mes = "Hola";
    if (true) {
        mes = "adios";
        console.log(mes);
    }
    console.log(mes);
} else if (3 == 1) {
    // 2
} else {
    // 3

    /**
     * USO DE TERNARIAS
     */
    true ? alert("esto es true") : alert("esto es false");

    // =======================================================================
    /* UN PROGRAMA QUE TE PIDA TU NOMBRE POR PROMPT Y LANCE UNA ALERTA SI EL NOMBRE: 
    ES "Admin" -> "Hello master"
    ES "User" -> "Hello User"
    ES OTRA COSA -> "I don't know you" */
    let user = prompt("Por favor introduce tu nombre...").trim().toLowerCase(); // Quitamos espacios y lo pasamos a minusculas
    console.log(user);

    /**
     * USANDO IF...ELSE
     */
    if (user == "admin") {
        alert("Hello Master");
    } else if (user === "user") {
        alert("Hello User");
    } else {
        alert("I dont know you");
    }

    /**
     * USANDO LA OPCION TERNARIA
     */
    let mensajeFinal = user === "admin" ?
        alert("Hello Master") :
        user === "user" ?
        alert("Hello User") :
        alert("I dont know you");

    /**
     * USANDO || (or)
     */
    if (user === "admin" || user === "user") {
        alert(`hello ${user}`);
    } else {
        alert("I dont know you")
    }

    /**
     * USANDO || (or) CON TERNARIA
     */
    user === "admin" || user === "user" ?
        alert(`hello ${user}`) :
        alert("I dont know you");

    // =======================================================================
    /* UN PROGRAMA QUE SI EL NÚMERO INTRODUCIDO:
    SI ESTÁ ENTRE 18 Y 28 INCLUIDOS...participantType= "Junior" 
    SI ES MAYOR ... participantType = "Senior"
    SINO ...participantType = null
    SI ES JUNIOR O SENIOR, PREGUNTAR CUANTOS AÑOS LLEVA PROGRAMANDO Y MOSTRARLO ("Soy un Junior/Senior y llevo X años programando")
     */
    let age = +prompt("Introduce tu edad");
    let participantType = ["Junior", "Senior", "null"]; // Uso de arrays
    let year = 0;
    let isNumber = isFinite(age);

    if (!isNumber) return "Error"; // Si no es número da error

    if (isNumber) {
        if (age >= 18 && age <= 28) {
            year = +prompt("Cuantos años llevas programando?");
            alert(`Genial ${participantType[0]} ...! y llevas ${year} años programando`);
        } else if (age > 28) {
            year = +prompt("Cuantos años llevas programando?");
            alert(`Genial ${participantType[1]} ...! y llevas ${year} años programando`);
        } else {
            alert(participantType[2]);
        }
    }

    // =======================================================================
    /* UN PROGRAMA QUE TE PIDA UN NUMERO1 Y UN NUMERO2. DESPUES DE PIDA LA OPERACION QUE QUIERES HACER (+ - * /) Y HACER LA OPERACION CORRESPONDIENTE
     */
    let num1 = +prompt("Introduce el primer número", 0);
    let num2 = +prompt("Introduce el segundo número", 0);
    let operation = "";
    let resultado = 0;
    num1IsValid = isFinite(num1); // Compruebo si son números
    num2IsValid = isFinite(num2);

    if (num1IsValid && num2IsValid) {
        operation = prompt("Que operación quieres realizar?");
        if (operation == "+") {
            resultado = num1 + num2;
        } else if (operation == "-") {
            resultado = num1 - num2;
        } else if (operation == "*") {
            resultado = num1 * num2;
        } else if (operation == "/") {
            resultado = num1 / num2;
        } else {
            alert("La operación es inválida");
        }
    } else {
        alert("Los numeros que has introducido no son validos");
    }

    if (num2 == 0) {
        alert(`Operación erronea...no puede dividir entre 0`);
    } else {
        alert(`El resultado de la operación es: ${resultado}`);
    }