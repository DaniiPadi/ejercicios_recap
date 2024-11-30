'use strict'

function sumarNum(num1, num2, num3) {
    let suma = num1 + num2 + num3;
    
    console.log(num1 + " + " + num2 + " + " + num3 + " = " + suma);
    
    return suma;
}
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));

let resultado = sumarNum(num1, num2, num3);
console.log("El resultado de la suma es: " + resultado);