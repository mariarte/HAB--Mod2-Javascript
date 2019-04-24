/**
 * CLASES
 * 
 * Métodos en Objetos
 * - Las funciones que se almacenan en las propiedades del objeto se denominan "métodos".
 * - Los métodos permiten que los objetos "actúen" como `objDePrueba.metodoDePrueba()`.
 * - Los métodos pueden hacer referencia al objeto con `"this"`.
 * 
 * El valor de `this` se define en tiempo de ejecución.
 * 
 * - Cuando se declara una función, puede usar `this`, pero ese `this` no tiene valor hasta que se llama a la función.
 * - Esa función puede ser copiada entre objetos.
 * - Cuando se llama a una función en la sintaxis del "método": `objDePrueba.metodoDePrueba()`, el valor de `this` durante la llamada es `object`.
 * Tenga en cuenta que las funciones de flecha son especiales: no tienen ningún `this`. Cuando se accede a `this` dentro de una función de flecha, se toma desde afuera(desde el global).
 */

// =======================================================================
// CREANDO UNA CLASE ACUMULADOR
class Acumulador2 {
    constructor(valorInicial, name = "Default name") {
        this.valorInicial = valorInicial;
        this.name = name;
    }

    introduce() {
        let var_user = +prompt("Introduce un valor");
        this.valorInicial += var_user;
        return this;
    }

    sayHi() {
        console.log("Hello");
    }
}
// let obj99 = new Acumulador2(30, "pepe"); // Creo el objeto
// let obj98 = new Acumulador2(30, "pepe");

// obj99.introduce(); // Llamo a la funcion introduce
// obj99.valorInicial; // Muestro el valor inicial

// =======================================================================
// CREAR UNA CLASE COCHE
class Coche {
    constructor(modelo, color, potencia = 100) { // Creo el constructor
        this.modelo = modelo;
        this.color = color;
        this.potencia = potencia;
    }
    setModelo(modelo) { // Funcion 
        this.modelo = modelo;
    }

    sameModel(coche2) {
        return this.modelo === coche2.modelo;
    }

    static sameColor(coche1, coche2) { // Func. ESTATICA --> compara 2 coches
        return coche1.color === coche2.color;
    }
}
// let c1 = new Coche("OPEL", "Blanco", 90); // Creo el objeto
// let c2 = new Coche("Carro", "Gris", 90);
// let c3 = new Coche("", "Blanco", 90);

// c1.sameModel(c2); // Llamo a la funcion 
// Coche.sameColor(c1, c2); // Llamo a la funcion estática, con el nombre de la clase
// c1.setModelo("Ferrari");

// =======================================================================
// CREAR UNA CLASE DELFIN. EL DELFIN QUE TENGA UN NOMBRE, UN PESO, LONGITUD, COLOR Y LOS METODOS "SALTAR" QUE IMPRIME POR CONSOLA SALTANDO... Y UN METODO GENERAL DE REPRODUCCION QUE AL PASARLE DOS DELFINES CON EL MISMO COLOR NOS DA UN TRUE (MINI DOLPHIN)

// CLASE ANIMAL (PADRE) = HERENCIA
class Animal {
    constructor(eyes = 2, mouth) {
        this.eyes = eyes;
        this.mouth;
    }

    jump() {
        console.log("Animal saltando");
    }
}

// CLASE DELFIN (HIJO)
class Delfin extends Animal {
    constructor(nombre, peso, longitud, color) {
        super(); // Llama al constructor del padre
        this.nombre = nombre;
        this.peso = peso;
        this.longitud = longitud;
        this.color = color;
    }

    saltar() {
        console.log("Saltando...");
        return null;
    }

    static reproduccion(d1, d2) {
        if (d1.color === d2.color) {
            console.log("Mini-dolphin de", d1.nombre, "y", d2.nombre);
            return true;
        }
        console.log("Los colores son distintos...prueba de nuevo");
        return false;
    }
}
// let delfin1 = new Delfin("Juanito", 150, 250, "gris"); // Creo objeto
// let delfin2 = new Delfin("Ranita", 150, 250, "rosa");
// let delfin3 = new Delfin("Andracita", 150, 250, "rosa");
// let delfin4 = new Delfin("Ostolo", 150, 250, "azul");

// console.log(delfin1.saltar()); // Llamo a la funcion saltar del delfin
// console.log(Delfin.reproduccion(delfin2, delfin3)); // Llamo a la funcion reproducción del delfin, que es estática porque compara con varios delfines

// =======================================================================
/** 
 * HACER UNA CLASE FURGONETA QUE EXTIENDA DE VEHICULO
 * HACER UNA CLASE COCHE QUE EXTIENDA DE VEHICULO
 * VEHICULO TIENE UNAS PROPIEDADES POR DEFECTO: PUERTAS 5, PESO 3000 KG
 * FURGONETA SUSTITUYE EL PESO A 5000 KG
 * COCHE SUSTITUYE EL PESO A 3500 KG Y AÑADE UN CAMPO RADIO (TRUE / FALSE
 * FURGONETA ADEMAS AÑADE EXTRA UN COLOR Y UN TIPO QUE PUEDE SER ESPECIAL O NO (TRUE O FALSE)
 *  */

// CLASE VEHICULO (PADRE) = HERENCIA
class Vehiculo {
    constructor(peso = 3000, puertas = 5) {
        this.peso = peso;
        this.puertas = puertas;
    }
}

// CREO LA CLASE COCHENEW
class CocheNew extends Vehiculo {
    constructor(radio = true) {
        super(); // Llama al constructor del padre
        this.radio = radio;
    }

    cambiarPeso() {
        console.log("Cambiando el peso de coche a: ", this.peso = 3500);
        // return null;
    }
}

// CREO LA CLASE FURGONETA
class Furgoneta extends Vehiculo {
    constructor(color, especial) {
        super();
        // this.peso = 8000
        this.color = color;
        this.especial = especial;
    }

    sustituyePeso() {
        console.log("Cambiando el peso de coche a: ", this.peso = 5000);;
    }
}

// CREO UNA CLASE FORD QUE EXTIENDE DE COCHE Y SE LE PASAN LAS PUERTAS Y EL TIPO DE COCHE
class Ford extends CocheNew {
    constructor(puertas, tipo = "Ford") {
        super();
        this.puertas = puertas
        this.tipo = tipo;
    }
}

// CREANDO COCHES NEW....
// let cocheNew1 = new CocheNew(false); // Creo objeto con radio false
// let cocheNew2 = new CocheNew();

// console.log("El constructor del coche es: ", cocheNew1);
// console.log(cocheNew1.cambiarPeso());

// console.log("**********************************************************");

// CREANDO FURGONETAS....
// let furgo1 = new Furgoneta("Rojo", true);
// let furgo2 = new Furgoneta("Verde", false);

// console.log("El constructor de furgoneta es: ", furgo1);
// console.log(furgo1.sustituyePeso());

// console.log("**********************************************************");

// CREANDO UN FORD DENTRO DE COCHE...
// let ford1 = new Ford(3, "Ford Fiesta");
// console.log("El constructor de Ford1 es: ", ford1);

// =======================================================================
/** 
 * PROBANDO ERRORES DE LA CLASE CREADA 
 * */

// try {
//     // Codigo a probar
//     let furgo1 = new Furgoneta("Rojo", true);
//     let furgo2 = new Furgoneta("Verde", false);
//     console.log(furgo1);
// } catch (e) {
//     // Si hay un error va a entrar automaticamente dentro del catch
//     console.error("Error", e);
// }