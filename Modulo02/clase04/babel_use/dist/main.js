"use strict";

var estado = 0;

var validarEstado = function validarEstado() {
  var est = false;

  if (estado == 0) {
    est = true;
  }

  return est;
};

var x;
x = 3.14;
console.log(x);