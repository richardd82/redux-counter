const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento, incrementoImpar } = require('./actions');
//import {createStore}from '@reduxjs/toolkit'
//const { INCREMENTO, DECREMENTO } = require('./action-types');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById("valor");

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
    let state = store.getState();//obtengo el estado
    let contador = state.contador;//obtengo el contador
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
    valor.innerHTML = contador;
    console.log('hola')
}

// Ejecutamos la funcion 'renderContador':

renderContador()

// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:

let unsubscribe = store.subscribe(renderContador);

// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
let inc = document.getElementById("incremento");
let dec = document.getElementById("decremento");
let imparBtn = document.getElementById("incrementoImpar");
let asyncBtn = document.getElementById("incrementoAsync");
inc.addEventListener('click', () => { 
  store.dispatch(incremento());
});
dec.addEventListener('click', () => {
  store.dispatch(decremento());
});
imparBtn.addEventListener('click', () => {
  store.dispatch(incrementoImpar());
});
asyncBtn.addEventListener('click', () => {
  setTimeout(function(){
    store.dispatch(incremento());
  }, 1000)
});

// hagan un dispatch al store de la accion correspondiente: