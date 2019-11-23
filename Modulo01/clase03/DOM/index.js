//console.log(document)
/*
document.getElementByID('title');

document.getElementsByTagName('span');


document.getElementsByClassName('texto');

document.querySelector(".texto span");

document.querySelectorAll(".texto span");

*/

var title=document.getElementById('title-site');
// single value
//console.log(title.innerText);
//title.innerText="Texto Actualizado";
/*
title.innerText="Bienvenido"; // inserta
title.innerText="al";
title.innerText="Curso";
*/

/*
title.innerText="Bienvenido"; // inserta 
title.innerText=title.innerText+" al";
title.innerText=title.innerText+" Curso"


console.log(title.classList)
//var calses_acutales=title.classList;
// title.classList=calses_acutales+" decoracion";
title.classList.add("decoracion")
//title.classList.remove("");
//title.classList=" ";
/*
console.log(title.getAttribute("data-precio"));
console.log(title.setAttribute("data-precio",40));
img.getAttribute("src")
img.setAttribute("src","nueva ruta");
*/
//title.innerText="<img src='https://via.placeholder.com/100x100'>"

//title.innerText //  obtiene el valor;
//title.innerText="" // actualiza el valor;

/*


var user=document.getElementById('inp_usuario').value;
console.log(user);

//var user_=document.getElementById('inp_usuario').value;

var pass=document.getElementById('inp_password').value;
console.log(pass);

*/






var inp_user=document.getElementById('inp_usuario')
var error_user=document.getElementById('error-usuario');
var inp_password=document.getElementById('inp_password')
var error_password=document.getElementById('error-password');
var validar=document.getElementById('validar');

var contenido=document.getElementById('contenido');
validar.addEventListener("click",validarDatos)

function validarDatos(){

	var user_=inp_user.value;
	var pass_=inp_password.value;

	if(user_.trim()!="" && pass_!=""){
			if(user_.trim()=="Admin" && pass_=="123***"){
				console.log("Datos Correctos")
				contenido.innerHTML="";
				contenido.innerHTML='<div> <h2>Bienvenido ' + user_+'</h2></div>'

				//window.location="https://www.google.com"

			}
			else{
				console.log("ERRROOOOORRR")
			}

	}
	else{

		validarCampo(pass_,error_password);
		validarCampo(user_,error_user);
		

	}

}


inp_user.addEventListener("keyup",actualizar)

function actualizar(){	
	validarCampo(inp_user.value,error_user)
}

/*
function validarUsuario(value){
	if(value==""){
		error_user.innerHTML="<strong class='error'>Dato requerido</strong>"
	}
	else{
		error_user.innerHTML="";
	}

}*/

//validarCampo("",inp_password);

function validarCampo(valor,error){
	if(valor.trim()==""){
		error.innerHTML="<strong>Campo Requerido</strong>"
	}
	else{
		error.innerHTML="";
	}
}

