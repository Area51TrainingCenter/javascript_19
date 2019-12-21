if(!validarEstado()){
	window.location="index.html"
}

const id_usuario=localStorage.id_usuario;

cargarListado();
function cargarListado(){

	var url_listado="http://192.168.2.44/rest/servicio/yape/amigos/id";
	var datos=new FormData();
	datos.set("id_usuario",id_usuario);
	var parametros={
		method:"POST",
		body:datos
	}
	fetch(url_listado,parametros)
	.then((data)=>{return data.json()})
	.then((data)=>{
		console.log(data)
		armarLista(data);
	});
}

/*

const btndeslogear=document.getElementById('deslogear');
btndeslogear.addEventListener("click",()=>{
deslogear();
})
*/



function armarLista(data){
	var temp=""
	var ind=1;
	for(item of data){
		//temp=temp+`<li>${item.nombres}-${item.telefono}</li>`

		temp = temp+`<li>
		<span class="ubicacion bg-blue">${ind}</span>
		<span class="nombres">${item.nombres}</span>
		<span class="telefono">${item.telefono}</span>
		</li>`	;
		ind++;
	}
	document.getElementById('resultado-lista').innerHTML=temp;


}
var modal=document.getElementById('modal');
var agregar=document.getElementById('btn_agregar');
agregar.addEventListener("click",()=>{
	console.log(modal);
	modal.classList.add("show");
})


var agregarUsuario=document.getElementById('agregar_usuario')
var formAmigo=document.getElementById('registro-amigo');
var mensajeError=document.getElementById('mensaje-error');
agregarUsuario.addEventListener("click",()=>{
	/*
	creo un formdata en base al formulario
	var datosAmigo=new FormData(formAmigo);
	// compruebo que los valores fueron guardados con las llaves correctas
	console.log(datosAmigo.get("nombres"))
	console.log(datosAmigo.get("telefono"))
	*/

	var datosAmigo=new FormData(formAmigo);
	datosAmigo.set("id_usuario",localStorage.id_usuario);

	var parametrosRegistro={
		method:"POST",
		body:datosAmigo
	}
	var url_registro="http://192.168.2.44/rest/servicio/yape/amigos/registro"
	fetch(url_registro,parametrosRegistro)
	.then((data)=>{return data.json()})
	.then((data)=>{
		if(data.estado==0){
			console.log("error")
			mensajeError.innerText=data.detalle
			mensajeError.classList.add("show")
		}
		else{
			console.log("se grabo con extio")
			modal.classList.remove("show");
			cargarListado();
		}

	

	});


})