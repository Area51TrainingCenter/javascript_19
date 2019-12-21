/*class Usuario{
	constructor(valor1,valor2,valor3,valor4=true){
		var nombre=valor1;
		var apellido=valor2;
		var correo=valor3;
		var estado=valor4
	}
	
	llamarPorTelefono(){

	}
	realizarPago(){

	}

}
var persona=new Usuario();
persona.nombre="JC"
persona.apellido="RT"
persona.correo="jramos@latina.pe"


var persona=new Usuario("jc","rt","ramos@gmail.com");
persona.nombre;
var persona=new Usuario();


var persona={
	nombre:"",
	apellido:"",
	correo:"",
	llamarPorTelefono:function(){},
	realizarPago:function(){

	}
}

*/


// declaracion de funcion
class Usuario{
	constructor(nombre,apellido){
		this.nombre=nombre;
		this.apellido=apellido;
	}
	obtenerNombreCompleto(){
		return this.nombre+" "+this.apellido;
	}
	static obtenerFecha(){
		return new Date();
	}

	get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
    set nomberCompleto(valor){
    	this.nombre=valor;
    }


	/*
	obtenerNombre(){
		return this.nombre;
	}*/
}

let user=new Usuario("juan Carlos","ramos")

user.nomberCompleto("Diego");


console.log(user.obtenerNombreCompleto());

// se puede usar directamente por que no encesito instanciar la clase
Usuario.obtenerFecha();
Math.max()
Math.random();



// expresion de funcion
var cuadrado=class cuadrado{
	constructor(a,b)
	{this.a=a;this.b=b}
	calcularArea(){

	}
}