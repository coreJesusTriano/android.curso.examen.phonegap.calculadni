window.onload = function() {
    document.getElementById('btnCalcular').addEventListener('click', calcularLetra, false);
}

function calcularLetra(e) {
    let tablaLetrasDni = 'TRWAGMYFPDXBNJZSQVHLCKE';
    let numDNI = document.getElementById('numDni').value;
    numDNI = parseInt(numDNI);
    let resto = numDNI % 23;
    let letra = tablaLetrasDni.charAt(resto);
    $('#label').removeClass("invisible");
    document.getElementById('result').innerHTML = `<p>${letra}</p><p>${numDNI}${letra}</p>`;
}