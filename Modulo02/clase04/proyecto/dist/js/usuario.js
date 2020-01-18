"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Usuario =
/*#__PURE__*/
function () {
  function Usuario(nombre, telefono) {
    _classCallCheck(this, Usuario);

    this.nombre = nombre;
    this.telefono = telefono;
  }

  _createClass(Usuario, [{
    key: "getNombre",
    value: function getNombre() {
      return this.nombre;
    }
  }, {
    key: "getTelefono",
    value: function getTelefono() {
      return this.telefono;
    }
  }, {
    key: "registrarUsuario",
    value: function registrarUsuario() {//
    }
  }, {
    key: "validarUsuario",
    value: function () {
      var _validarUsuario = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(data) {
        var estado_validacion, user, password, usuarios;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                estado_validacion = false;
                console.log("estoy ejecutando la funcion dentro del objeto");
                user = data.get("user");
                password = data.get("password");
                usuarios = firebase.database().ref("usuarios"); // el metodo on te permite leer los datos y trabajar una escucha continua
                // el metodo once te permite leer los datos una sola vez

                _context.next = 7;
                return usuarios.once("value", function (data) {
                  // resultados se obtienen de data.val()
                  var resultados = data.val();
                  console.log(resultados); //resultados;

                  for (var propiedad in resultados) {
                    if (user == propiedad) {
                      var password_ = resultados[propiedad].password;

                      if (password == password_) {
                        estado_validacion = true;
                        localStorage.dni = user;
                      } else {
                        estado_validacion = false;
                      }
                    }
                  }
                });

              case 7:
                return _context.abrupt("return", estado_validacion);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function validarUsuario(_x) {
        return _validarUsuario.apply(this, arguments);
      }

      return validarUsuario;
    }()
  }]);

  return Usuario;
}();