var btn = document.getElementById("btn1");
btn.addEventListener("click" , function(){
    var num = document.getElementById("num").value;
    var sumaPar = 0;
    var sumaImpar = 0;
    var sumaMulti = 0;
    for(var i=50; i<=num; i++){
        if(i % 2 ===0){
            sumaPar = sumaPar + i;
        }
        else {
            sumaImpar = sumaImpar + i;
        }
        if (i % 5 === 0){
            sumaMulti = sumaMulti + i;
        }

    }
    var div1= document.getElementById("div1");
    var div2= document.getElementById("div2");
    var div3= document.getElementById("div3");

    div1.innerHTML = "Suma de pares: "+sumaPar;
    div2.innerHTML = "Suma de impares: "+sumaImpar;
    div3.innerHTML = "Suma de multiplos de 5: "+sumaMulti;

    div1.style.color= "black";
    div2.style.color= "black";
    div3.style.color= "black";
    


    var mayor; 
    var enmedio;
    var menor;

    if(sumaPar > sumaImpar){
        mayor = sumaPar;
        div1.style.color = "green";
        if(mayor <  sumaMulti){
            mayor = sumaMulti;
            div3.style.background = "green";
        }
        //else {div2.style.color = "green";}
    }
    else {
        mayor = sumaImpar;
        div2.style.color = "green";
    }



});
