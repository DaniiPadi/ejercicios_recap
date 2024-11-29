'use strict'

let cuenta = confirm("¿Tienes una cuenta?");

let contraseña = confirm("¿Conoces la contraseña?");

if (cuenta && contraseña) {
  alert("Acceso concedido");
} else {
  alert("Acceso denegado");
}