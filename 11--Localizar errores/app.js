// =======================================================================
/** DEBUGGER
 * video: https://www.youtube.com/watch?v=6cOsxaNC06c
 * 
 * El debugger nos facilita analizar el código.
 * Para la ejecución en la línea donde se añade la palabra debugger. Y posteriormente puedes proseguir con la ejecución línea por línea o saltar a distintos breakpoints analizando los valores de las variables en el momento exacto de ejecución.
 */

// Para usar debugger...dar al play y elegir opción node.js
const cube = num1 => {
    //debugger;
    console.log("Lo que sea");
    return num1 ** 3;
}
cube(3); // Llamada

// =======================================================================
/** ERRORES
 *  SINTAXIS:
 *      try {
            // Codigo a probar
        } catch (e) {
            // Si hay error entra automaticamente dentro del catch
            console - console.error(e);
        }
 */

// =======================================================================
/**
 * CUSTOMIZAR ERRORES:
 */
class Error { // Ya está creada por defecto
    name: "ReferenceError",
        message: "jsidfjas is not defined",
        stack: "error at ..."
}
class LoginError extends Error { // con ctrl+F12 te lleva a la pantalla modif.
    constructor() {
        super();
        this.superTrim = "adb";
    }
}