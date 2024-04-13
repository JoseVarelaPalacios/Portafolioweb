var btn = document.querySelector("#btnMostrar");
btn.addEventListener("click", function() {
    var rangoI = parseInt(document.getElementById("inicio").value);
    var rangoF = parseInt(document.getElementById("fin").value);
    var sumatoria = 0;

    for (var i = rangoI; i <= rangoF; i++) {
        if (i % 2 === 0) {
            sumatoria += i;
        }
    }

    document.getElementById("resultado").textContent = "La sumatoria de los numeros pares entre " + rangoI + " y " + rangoF + " es: " + sumatoria;
});




    

