var titulo=document.getElementById('titulo');
/*
cambiarTexto();

cambiar(){
	//titulo.style.fontSize="5px";
}
function cambiarTexto(){
titulo.style.fontSize="5px";
}*/

/*

var dato=crearfuncion(10);
dato(2)




function crearfuncion(valor1){

	console.log(valor1);
	return function(dato1){
		console.log(dato1);
		console.log("estoy en la funcion de retorno")
	}
}

*/

function cambiarSize(size){
	return function(porpiedad){
		if(propiedad=="fontSize"){
			titulo.style.fontSize=size+"px";
		}
		else if(propiedad=="margin"){
			titulo.style.margin=size+"px";
		}
		//console.log("debo cambiar la fuente en "+size+"px");
		

	}
}

var cambiarSmall=cambiarSize(10);
var cambiarMeidum=cambiarSize(30);
var cambiarLarge=cambiarSize(100);


document.getElementById('op1').onclick=cambiarSmall("fontSize");

document.getElementById('op2').onclick=cambiarMeidum("margin");

document.getElementById('op3').onclick=cambiarLarge("margin");
