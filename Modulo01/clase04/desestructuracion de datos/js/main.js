var persona=["Juan","Ramos","jramos@gmail.com"]
/*
var nombre=persona[0]
var apellido=persona[1]
*/
var [nombre,,correo]=persona;
console.log(nombre)

console.log(correo)

var datos=["JC","jramos@gmail.com"]
function mostarDatos(datos){
	datos[0];
	datos[1];

}
var datos=["JC","jramos@gmail.com"]
function mostarDatos([nombre,correo]){
console.log(nombre)
}

mostarDatos(datos);

[nombre,correo]=datos

var item={
	marca:"Marca1",
	precio:1000,
	stock:20
}

var {marca,stock,precio,estado=true}=item

console.log(marca)
