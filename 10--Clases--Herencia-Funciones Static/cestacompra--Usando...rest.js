"use strict"

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Libro extends Producto {
    constructor(nombre, precio, autor) {
        super(nombre, precio);
        this.autor = autor;
    }

}

class Cesta {
    constructor() {
        this.productos = [];
    }

    anadirProducto(cantidad, producto) {
        this.productos.push(...Array(cantidad).fill(producto));
    }

    calcTotal() {
        return this.productos
            .map(producto => producto.precio)
            .reduce((a, b) => a + b, 0);
    }

    imprimirTotal() {
        console.log('El pago total es: ' + this.calcTotal());
    }
}



const pan = new Producto("Pan", 1);
const agua = new Producto("Agua", 0.25);
const quijote = new Libro("El ingenioso hidalgo Don Quijote", 12, "Cervantes");

const cesta = new Cesta();
cesta.anadirProducto(3, pan);
cesta.anadirProducto(5, agua);
cesta.anadirProducto(1, quijote);
console.log(cesta.productos);

cesta.imprimirTotal();