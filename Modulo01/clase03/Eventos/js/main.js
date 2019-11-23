/*var title=document.getElementById('title').innerText;

var inicial="";

var accion=document.getElementById('cambiar');
accion.addEventListener("click",tarea)

function tarea(){
	inicial=title.innerText;
	title.innerText="TExto modificado";
}

var regresar=document.getElementById('regresar')
regresar.addEventListener("click",tarea2)

function tarea2(){
	title.innerText=inicial;
}


*/

var elemento=document.getElementById('toggle');
elemento.addEventListener("click",actualizar)
function actualizar(){

	var estado=elemento.getAttribute("data-estado");
	
	if(estado=="0"){
		inicial=title.innerText;
		title.innerText="Texto cambio";
		elemento.setAttribute("data-estado",1)
	}
	else{
		title.innerText=inicial;
		elemento.setAttribute("data-estado",0)
	}
}
