"use strict";

var contactos = new Contactos();
var pago = new Pago();
contactos.listarContactos();
document.getElementById('btn-agregar').addEventListener("click", function () {
  var data = new FormData(document.getElementById('f-agregar'));
  contactos.agregarContacto(data);
});

function pagar(telefono, nombre) {
  var valor = prompt("Ingresar el monto a Pagar");
  pago.registrarPago(nombre, telefono, valor);
}