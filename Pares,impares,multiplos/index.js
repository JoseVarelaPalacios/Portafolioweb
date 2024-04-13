document.getElementById('calcular').addEventListener('click', function() {
    calcularSuma();
});

function calcularSuma() {
    const numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    if (isNaN(numeroUsuario)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let sumaPares = 0;
    let sumaImpares = 0;
    let sumaMultiplos5 = 0;

    for (let i = 1; i <= numeroUsuario; i++) {
        if (i % 2 === 0) {
            sumaPares += i;
        } else {
            sumaImpares += i;
        }

        if (i % 5 === 0) {
            sumaMultiplos5 += i;
        }
    }

    document.getElementById('sumaPares').innerHTML = "<p style='color: " + (sumaPares > sumaImpares && sumaPares > sumaMultiplos5 ? 'green' : (sumaPares < sumaImpares ? 'red' : 'purple')) + "'>Suma de números pares hasta " + numeroUsuario + ": " + sumaPares + "</p>";
    document.getElementById('sumaImpares').innerHTML = "<p style='color: " + (sumaImpares > sumaPares && sumaImpares > sumaMultiplos5 ? 'green' : (sumaImpares < sumaPares ? 'red' : 'purple')) + "'>Suma de números impares hasta " + numeroUsuario + ": " + sumaImpares + "</p>";
    document.getElementById('sumaMultiplos5').innerHTML = "<p style='color: " + (sumaMultiplos5 > sumaPares && sumaMultiplos5 > sumaImpares ? 'green' : (sumaMultiplos5 < sumaPares && sumaMultiplos5 < sumaImpares ? 'red' : 'purple')) + "'>Suma de múltiplos de 5 hasta " + numeroUsuario + ": " + sumaMultiplos5 + "</p>";
}
