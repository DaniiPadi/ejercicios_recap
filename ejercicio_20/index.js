'use strict'

const calcularIVA = (precio) => {
    
    let iva = precio * 0.12;
    
    let precioTotal = precio + iva;

    console.log("Precio original: " + precio);
    console.log("IVA del 12%: " + iva);
    console.log("Precio total con IVA: " + precioTotal);

    return precioTotal;
  };
  
  let total = calcularIVA(250);