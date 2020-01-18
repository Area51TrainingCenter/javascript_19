"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pago =
/*#__PURE__*/
function () {
  function Pago() {
    _classCallCheck(this, Pago);
  }

  _createClass(Pago, [{
    key: "registrarPago",
    value: function registrarPago(_nombre, _telefono, _pago) {
      var obj_pago = {
        nombre: _nombre,
        telefono: _telefono,
        dni: localStorage.dni,
        pago: _pago
      };
      console.log(obj_pago);
      firebase.database().ref("pagos").push(obj_pago);
    }
  }, {
    key: "listadoPago",
    value: function listadoPago(id_usuario) {//
    }
  }]);

  return Pago;
}();