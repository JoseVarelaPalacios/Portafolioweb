var boton = document.getElementById("btnCalcular");
document.addEventListener("click", operacion)

function operacion(){
    var cali1 = parseInt(document.getElementById("cal1").value);
    var cali2 = parseInt(document.getElementById("cal2").value);
    var cali3 = parseInt(document.getElementById("cal3").value);
    var cali4 = parseInt(document.getElementById("cal4").value);
    var resultadop = (cali1+cali2+cali3)/3;
    var resultadof = (resultadop+cali4)/2;

    document.getElementById("c_final").innerHTML=resultadof;


    

    if (resultadof >= 6) {
        document.getElementById("c_final").classList.remove("alert-danger");
        document.getElementById("c_final").classList.add("alert-success");
    }
    else {
        document.getElementById("c_final").classList.remove("alert-success");
        document.getElementById("c_final").classList.add("alert-danger");
    }

}