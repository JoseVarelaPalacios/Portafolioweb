var btn = document.getElementById("btn1");
btn.addEventListener("click", function() {
    var num = parseInt(document.getElementById("num").value);
    var mul = parseInt(document.getElementById("multiplo").value);
    var resultado = "";

    for (var i = num; i > 0; i--) {
        if (i % mul === 0) {
            resultado += "<b>" + i + " es multiplo de " + mul + "</b><br>";
        } else {
            resultado += i + " no es multiplo de " + mul + "<br>";
        }
    }

    document.getElementById("resultado").innerHTML = resultado;
});
