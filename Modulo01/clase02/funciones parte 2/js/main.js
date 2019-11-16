//declaracion de funcion;
/*function tarea(paremtros){
	// ambieto de la funcion
}
tarea(10);

// Asignacion expresion
var tarea2=function(val){
	// rutina
}

tarea2(12);
*/
/* hoisting de variables funciones */
/*
function bienvenida(){
	console.log("Hola");
}
var despedida;
/**** *****/
/*
bienvenida()


function bienvenida(){
	console.log("Hola");
}


var despedida=function(){
	console.log("Adios");
}

despedida();


var producto={
	nombre:"producto",
	codigo:"c0001",
	obtenerNombre:null
}

producto.obtenerNombre=function(){
	console.log("esta funcion debe obtener el nombre del producto");

}



producto.obtenerNombre();





function tarea(parametro1,paremtro2){

}

function tarea2(){

}


function tarea3(valor){
	return valor*0.22;
}

function tarea4(){

}
*/
/*
var calcula_igv=igv(500);

console.log(calcula_igv);
console.log(HoraActual());

console.log(altas("asdasdasdasd"));

console.log(igv_variable(100));
console.log(igv_variable(100,0.22));
*/
var tarea5=function(valor1,valor2){
	var suma;
	suma=valor1+valor2;
	return suma;
}

var tarea5=(valor1,valor2)=>{
	var suma;
	suma=valor1+valor2;
	return suma;
}


var tarea5=function(valor1,valor2){return valor1+valor2;}

var tarea5= valor1 => {
	return {nombre:"jc",edad:22}
}

function tarea5(valor1){
	return valor1+5;
}

(function (){
	console.log("Bienvendio");
})()





var dato="JC";

function tarea_1()
{	
	 dato_interno="Ramos";
	/*console.log(dato);
	console.log(dato_interno);*/
}
/*
function tarea_2()
{	var dato2="DIEGO";
	//console.log(dato);
}
*/
tarea_1();

console.log(dato_interno);


var logica="prueba";
function demo(){
	var demo1="demo"
}
var estado=true;

if(estado){
	var resultado="el resultado es verdadero";

}
else{

}
console.log(resultado);

var persona={
	nombre:"Juan Carlos",
	apellido:"Ramos",
	completo:null
}

function obtener(){
	console.log(this.nombre);	
	//console.log(this.nombre);
}
/*
persona.nombreCompleto();
obtener();*/

persona.completo=obtener;
persona.completo();
obtener();




var objeto2={
	nombre:"Diego",
	saldo:1100
}
var objeto3={
	nombre:"Diego",
	saldo:2000
}


objeto3.tarea=asignar;

function asignar(valor1,valor2,valor3){
	console.log(this.saldo+valor1);
	//console.log(this.nombre)
}
objeto3.tarea(500,300);

asignar.call(objeto3,500,300,33);

asignar.apply(objeto2,[500,300,33])

var nuevafuncion=asignar.bind(objeto2)
nuevafuncion(1,2,3);



































































