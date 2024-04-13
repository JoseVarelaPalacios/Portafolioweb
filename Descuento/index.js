var boton = document.getElementById("btnCalcular");
document.addEventListener("click", operacion)

function operacion(){
    var precio = parseInt(document.getElementById("precio").value);
    var descuento = parseInt(document.getElementById("descuento").value);
    var resultado = precio-(precio*(descuento/100));
    

    document.getElementById("precio_final").innerHTML=resultado;

}