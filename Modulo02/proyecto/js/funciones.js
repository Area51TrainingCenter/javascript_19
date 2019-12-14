
function logear(id){
	localStorage.estado=1;
	localStorage.id_usuario=id;
}
function deslogear(){
	localStorage.estado=0;
	window.location="index.html"
}
function validarEstado(){
	var estado=false;
	if(	localStorage.estado=="1"){
		estado=true;
	}
	return estado;
}