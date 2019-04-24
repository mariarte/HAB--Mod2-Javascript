// PROGRAMA PARA DIVIDIR DOS NÚMEROS
async function dividir(n1, n2) {
    if (n2 === 0) {
        throw new Error('....'); // THROW: lanzar excepciones
    }
    return n1 / n2;
}

(async() => {
    try {
        const result = await dividir(5, 2);
        console.log(result);
    } catch (e) {
        console.log(e.message);
    }
})();

// PROGRAMA QUE MULTIPLIQUE CON MUCHOS CONSOLES PARA VER EL FLUJO
async function multiplicar(n1, n2) {
    if (n2 < 0) {
        throw new Error('....'); // THROW: lanzar excepciones
    }
    return n1 * n2;
}

(async() => {
    try {
        const result = await multiplicar(5, 2);
        console.log(result);
    } catch (e) {
        console.log(e.message);
    }
})();