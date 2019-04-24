const abcdario = ["A", "B", "C", "D", "E", "F"];

function cambioAMinusculas(abcdario) {
    const arrayAux = abcdario.map(
        function cambio(value, i) {
            console.log(value, value.charCodeAt(0), i);
            console.log(value.charCodeAt(0));
            console.log("-----------");
            if ((value.charCodeAt(0)) > 64 && (value.charCodeAt(0)) < 97) {
                let codCambio = value.charCodeAt(0) + 32;
                let caracterCambio = String.fromCharCode(codCambio)
                console.log("Codigo cambiado:" + codCambio); //devuelve el cod 97 (a)
                console.log(caracterCambio); //devuelve "a"
                return caracterCambio;
            }
            console.log("-----------");
        })
    console.log(abcdario);
    console.log(arrayAux);
    return arrayAux;
}

cambioAMinusculas(abcdario);