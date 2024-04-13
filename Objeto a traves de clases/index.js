import {Persona} from './persona.js'
import {Combo} from './Combo.js';
const benny = new Persona('Benito', 'Juarez', 68, 1.80);
const porfi = new Persona('Porfirio', 'Guerreo', 76, 1.73);
console.log(benny.imc());
console.log(porfi.saludar());
//const colores = new Combo ('cmbColores', 'colores', 'text-danger', ['azul', 'rojo', 'verde']);
//document.getElementById('div1').innerHTML=colores.mostrar();


let btn = document.querySelector('#btn1');
btn.addEventListener('click', ()=>{
    let valores = document.querySelector('#valores').value;
    let arrayValores = valores.split(',');
const colores = 
new Combo ('cmbColores', 'colores', 'text-danger', arrayValores);
document.getElementById('div1').innerHTML=colores.mostrar();

/*const btn1= new Boton('Eliminar', 'danger', 'btn1', 'btnEliminar');
var div1= document.querySelector(#div1);
div1.innerHTML=btn1.mostrar()*/
});