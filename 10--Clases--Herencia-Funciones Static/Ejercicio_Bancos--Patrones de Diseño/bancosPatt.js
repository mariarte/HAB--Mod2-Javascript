"use strict"
class SingletonBanco {
    constructor(nombre) {
        this._nombre = nombre
        this.instancia = null;
    }

    crearBanco() {
        this.instancia = new Banco(this.nombre);
    }

    get banco() {
        if (this.instancia == null) {
            crearBanco();
        }
        return this.instancia;
    }
}

class Banco {
    constructor(nombre) {
        this.nombre = nombre;
        this.cuentas = [];
        this.clientes = [];
        this.suscriptores = [];
        this.idCuentas = 0;
        this.idCliente = 0;
        this.protoCuenta = null;
    }

    crearCliente(nombreCliente) {
        const nuevoCliente = new Cliente(this.nuevoIdCliente, nombreCliente);
        this.anadirCliente(nuevoCliente);
        return nuevoCliente;
    }

    anadirCliente(cliente) {
        if (this.clientes.indexOf(cliente) === -1) {
            this.clientes.push(cliente);
        }
    }

    crearCuenta(cliente, saldo) {
        //const nuevaCuenta = new Cuenta(this.nuevoIdCuenta, cliente, this, saldo);
        const nuevaCuenta = this.crearCuentaApartirProto();
        nuevaCuenta.id = this.nuevoIdCuenta;
        nuevaCuenta.cliente = cliente;
        nuevaCuenta.saldo = saldo;
        this.anadirCuenta(nuevaCuenta);
        this.anadirCliente(cliente);
        cliente.anadirCuenta(nuevaCuenta);
        return nuevaCuenta;
    }

    anadirCuenta(cuenta) {
        if (this.cuentas.indexOf(cuenta) === -1) {
            this.cuentas.push(cuenta);
        }
    }

    crearCuentaApartirProto() {
        if (this.protoCuenta == null) {
            cambiarComision(0);
        }
        const nuevaCuenta = new Cuenta();
        nuevaCuenta.id = this.protoCuenta.id;
        nuevaCuenta.cliente = this.protoCuenta.cliente;
        nuevaCuenta.banco = this.protoCuenta.banco;
        nuevaCuenta.saldo = this.protoCuenta.saldo;
        nuevaCuenta.comision = this.protoCuenta.comision;
    }

    get nuevoIdCuenta() {
        return ++this.idCuentas;
    }

    get nuevoIdCliente() {
        return ++this.idCliente;
    }

    cambiarComision(nuevaComision) {
        const cuentaProto = new Cuenta(null, null, this, 0);
        cuentaProto.comision = nuevaComision;
        this.protoCuenta = cuentaProto
    }
}

class Cliente {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.cuentas = [];
    }

    anadirCuenta(cuenta) {
        if (this.cuentas.indexOf(cuenta) === -1) {
            this.cuentas.push(cuenta);
        }
    }

}

class Cuenta {
    constructor(id, cliente, banco, saldo) {
        this.id = id;
        this.cliente = cliente;
        this.banco = banco;
        this.saldo = saldo;
        this._comision = 0;
    }

    get comision() {
        return this.comision;
    }

    set comision(value) {
        this._comision = value;
    }


}

const banco1 = new Banco('Caixa');
console.log(banco1);

const cliente1 = banco1.crearCliente('María');
const cliente2 = banco1.crearCliente('Antonio');
console.log(cliente1);

const saldoInicial = 30;
const cuenta1 = banco1.crearCuenta(cliente1, saldoInicial);
const cuenta2 = banco1.crearCuenta(cliente2, 300);
console.log(cuenta1);