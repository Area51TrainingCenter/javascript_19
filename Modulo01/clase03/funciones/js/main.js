// funcion sin parametros
function tarea(){
	// ambieto de funcion
}

// funcion con parametros
function tarea1(valor1,valor2,valor3){
	var suma=valor1+valor2+valor3;
}


tarea();  // ejecuta la funcion
tarea1(); // ejectua la funcion
/*
tarea  // devuelve la funcion
tarea1 // devuleve la funcion
*/
function tarea2(valor1,valor2){
	var suma=valor1+valor2;
	return suma;
}


/*
var resultado=tarea2(10,20);
resultado // 30

var resultado2=tarea2

resultado2 // function tarea2(valor1,valor){ //}
resultado2();
*/




var intentos=0;

function addIntentos(estado){
	if(estado){
		intentos++;
	}
}



function addIntentos2(estado,intentos){
	if(estado){
		return intentos+1;
	}
}
intentos=addIntentos2(true,intentos);


function datos(valor1,valor2,valor3,valor4){

}

datos("string",20,[1,2],{name:"JC"})

function calcular(valor){
	var suma=10+20; // 20 segundos  -> valor();
	console.log(suma);
	if(suma>20){
		valor(4);	
	}
	else{
		valor(2);
	}

	 // terminar()
}

function terminar(valor){
	console.log("Termino la operacion,enviado desde un callback");
}


calcular(terminar)

function valores(dato1,dato2=true){
	console.log(dato1)
	console.log(dato2)
}

valores("Jc",false);



function organizar(valor){
	var tipo=typeof valor;
	if(tipo==="function"){
		valor();
		//console.log("se debe ejecutar la funcion");
	}
	else{
		alert("el valor ingresado no es una funcion")
	}

	

	//valor();
}


function tarea_2(){
	console.log("las tareas han sido organizadas");
}

var dato_numero=20;


organizar(tarea_2);













