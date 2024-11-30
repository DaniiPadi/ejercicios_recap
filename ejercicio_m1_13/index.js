'use strict'

const edad = parseInt(prompt("Cuántos años tienes?"));
const edadMinima = 18;

if (edad >= edadMinima) {
  alert("Mayor de edad");
} else {
  alert("Menor de edad");
}