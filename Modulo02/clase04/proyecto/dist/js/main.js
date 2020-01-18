"use strict";

//console.log(firebase);
var obj_usuario = new Usuario();
var f_login = document.getElementById('f-login');
var btn_login = document.getElementById('btn-login');
btn_login.addEventListener("click", function () {
  var data = new FormData(f_login);
  var estado = obj_usuario.validarUsuario(data);
  estado.then(function (data) {
    if (data == true) {
      window.location = "listado.html";
    } else {
      alert("datos incorrectos");
    }
  });
  /*console.log(estado);
  if(estado==true){
  	console.log("estoq uiere decir que los datos son correctos")
  }
  else{
  	console.log("DATOS INCORRECTOS")		
  }*/
});