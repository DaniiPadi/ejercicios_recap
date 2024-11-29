'use strict'

const edad = parseInt(prompt("Cuántos años tienes?"));
const edadMinima = 18;

if (edad >= edadMinima) {
  alert("Puedes votar");
} else {
  alert("No eres mayor de edad");
}