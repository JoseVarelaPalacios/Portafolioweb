import { Storage } from "./Storage.js";

class Producto {
    constructor(nombre, precio, fechaCompra, producto) {
        this.nombre = nombre;
        this.precio = precio;
        this.fechaCompra = fechaCompra;
        this.producto = producto;
    }
}

var productos = Storage.obtener('productos') || [];

const formProducto = document.getElementById('formProducto');
const tablaProductos = document.getElementById('datos');

// Cargar datos almacenados al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    productos = Storage.obtener('productos') || [];
    mostrarProductos();
});


formProducto.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const fechaCompra = document.getElementById('fechaCompra').value;
    const producto = document.getElementById('producto').value;
    
    const nuevoProducto = new Producto(nombre, precio, fechaCompra, producto);
    productos.push(nuevoProducto);
    Storage.asignar('productos', productos);
    mostrarProductos();
    formProducto.reset();
});

function mostrarProductos() {
    tablaProductos.innerHTML = '';
    productos.forEach((producto, index) => {
        const fila = `
            <tr>
                <td>${index + 1}</td>
                <td contenteditable="false" data-indice="${index}" data-columna="nombre">${producto.nombre}</td>
                <td contenteditable="false" data-indice="${index}" data-columna="precio">${producto.precio}</td>
                <td contenteditable="false" data-indice="${index}" data-columna="fechaCompra">${producto.fechaCompra}</td>
                <td contenteditable="false" data-indice="${index}" data-columna="producto">${producto.producto}</td>
                <td>
                    <button class="btn btn-warning btnEditar" data-indice="${index}">Editar</button>
                    <button class="btn btn-success btnGuardar" data-indice="${index}" style="display: none;">Guardar</button>
                    <button class="btn btn-danger btnEliminar" data-indice="${index}">Eliminar</button>
                </td>
            </tr>
        `;
        tablaProductos.innerHTML += fila;
    });
}

tablaProductos.addEventListener('click', function(event) {
    if (event.target.classList.contains('btnEliminar')) {
        const indice = event.target.getAttribute('data-indice');
        productos.splice(indice, 1);
        Storage.asignar('productos', productos);
        mostrarProductos();
    } else if (event.target.classList.contains('btnEditar')) {
        const indice = event.target.getAttribute('data-indice');
        const producto = productos[indice];
        document.getElementById('nombre').value = producto.nombre;
        document.getElementById('precio').value = producto.precio;
        document.getElementById('fechaCompra').value = producto.fechaCompra;
        document.getElementById('producto').value = producto.producto;
        
        const guardarBtn = document.createElement('button');
        guardarBtn.textContent = 'Guardar';
        guardarBtn.classList.add('btn', 'btn-success', 'btnGuardar');
        guardarBtn.setAttribute('data-indice', indice);
        
        const form = document.getElementById('formProducto');
        form.appendChild(guardarBtn);
        
        guardarBtn.addEventListener('click', function(event) {
            const indice = event.target.getAttribute('data-indice');
            const nombre = document.getElementById('nombre').value;
            const precio = document.getElementById('precio').value;
            const fechaCompra = document.getElementById('fechaCompra').value;
            const producto = document.getElementById('producto').value;
            
            productos[indice].nombre = nombre;
            productos[indice].precio = precio;
            productos[indice].fechaCompra = fechaCompra;
            productos[indice].producto = producto;
            
            Storage.asignar('productos', productos);
            mostrarProductos();
            
            form.reset();
            form.removeChild(guardarBtn);
        });
    }
});
