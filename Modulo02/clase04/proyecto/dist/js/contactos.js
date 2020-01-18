"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Contactos =
/*#__PURE__*/
function () {
  function Contactos() {
    _classCallCheck(this, Contactos);
  }

  _createClass(Contactos, [{
    key: "agregarContacto",
    value: function agregarContacto(data) {
      var obj_contacto = {
        nombre: data.get("nombre"),
        telefono: data.get("telefono"),
        dni: localStorage.dni
      };
      console.log(obj_contacto);
      firebase.database().ref("contactos").push(obj_contacto);
    }
  }, {
    key: "listarContactos",
    value: function listarContactos() {
      var contactos = firebase.database().ref("contactos"); // el metodo on te permite leer los datos y trabajar una escucha continua
      // el metodo once te permite leer los datos una sola vez

      contactos.on("value", function (data) {
        // resultados se obtienen de data.val()
        var resultados = data.val();
        console.log(resultados);
        var elelemto = document.getElementById('lista-amigos');
        var listado = "";

        for (var item in resultados) {
          console.log(resultados[item].nombre);
          console.log(resultados[item].telefono);
          listado = listado + "<li onclick=\"pagar(".concat(resultados[item].telefono, ",'").concat(resultados[item].nombre, "')\" class=\"list-group-item\">").concat(resultados[item].nombre, " <span class=\"float-right\">").concat(resultados[item].telefono, "</span>\t</li>");
        }

        elelemto.innerHTML = listado;
      });
    }
  }]);

  return Contactos;
}();