'use strict'
let a = 5;
let b = 10;

alert(`Los valores son a = ${a} , b = ${b}`);

let nuevo = a;
a = b;
b = nuevo;

alert(`Los valores intercambiados son a = ${a} , b = ${b}`);