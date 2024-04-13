//sesion 13
import { storage } from "./Storage.js";
let btn = document.querySelector('#btn1');
btn.addEventListener('click', () =>{
    let nuevoNombre = document.querySelector('#nuevonombre');
    document.querySelector('#nom').innerHTML = nuevoNombre.value;
    //window.localStorage.setItem('usuario' , nuevoNombre.value);
    storage.asignar('usuario' , nuevoNombre.value)
    nuevoNombre.value= ' ';
});
let nombreLocal = storage.obtener('usuario');
document.querySelector('#nom').innerHTML=nombreLocal;
storage.limpiar();
