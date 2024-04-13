var btnGenerar = document.querySelector("#btnGenerar");

btnGenerar.addEventListener("click", () => {
    var cuantos = parseInt(document.querySelector("#cuantos").value);
    var inputs = "";
    for (var i = 1; i <= cuantos; i++) {
        inputs += '<div class="col-md-3">';
        inputs += '<input type="number" id="n' + i + '" class="form-control" placeholder="Numero ' + i + '">';
        inputs += '</div>';
    }
    document.getElementById('panel').innerHTML = inputs;
});

var btnOperar = document.querySelector('#btnOperar');
btnOperar.addEventListener('click', () => {
    var cuantos = parseInt(document.querySelector("#cuantos").value);
    var op = document.querySelector('#operacion').value;
    var resultado = 0;
    if (op == 1) {
        resultado = sumar(cuantos);
    } else if (op == 2) {
        resultado = sumar(cuantos) / cuantos;
    } else {
        resultado = multiplicar(cuantos);
    }
    alert("Resultado: " + resultado);
});

function sumar(cuantos) {
    var suma = 0;
    for (var i = 1; i <= cuantos; i++) {
        suma += parseInt(document.querySelector('#n' + i).value);
    }
    return suma;
}
function multiplicar(cuantos) {
    var producto = 1;
    for (var i = 1; i <= cuantos; i++) {
        producto *= parseInt(document.querySelector('#n' + i).value);
    }
    return producto;
}
