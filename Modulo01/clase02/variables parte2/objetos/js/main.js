var producto={
	nombre:"Iphone 7",
	precio:2000,
	marca:"Apple",
	fabricacion:2019,
	gama:"Alta",
	stock:10,
	codigo:"t0001",
	categoria:"celulares"
};
//console.log(producto.proveedor)
producto.proveedor="pepito SAC";
console.log(producto)

producto["stock"]

var data="precio";

producto[data];

/*
console.log(producto["nombre"]);
console.log(producto.nombre);
console.log(producto.codigo);
console.log(producto.stock);

*/
var propiedad="categoria";

producto.categoria;
producto["categoria"];

producto.propiedad;  // Error
//producto."categoria" // Error

producto[propiedad]; // Si lo reconoce
producto["categoria"]; // resultado
/*
console.log(producto)
producto.categoria="Electronicos";

console.log(producto)

*/
var alumno={
	nombre:"Jc",
	notas:[]
}
alumno.nombre // Jc
alumno.notas.push(15)
alumno.notas.push(15)
alumno.notas.push(17)
alumno.notas.push(18)
alumno.notas.push(15)
alumno.notas.push(17)
alumno.notas.push(18)
alumno.notas.push(15)
alumno.notas.push(17)
alumno.notas.push(18)
alumno.notas.push(17)
alumno.notas.push(20)
/*
console.log(alumno);
var indice_final=alumno.notas.length-1;
console.log(alumno.notas[0])
console.log(alumno.notas[1])
console.log(alumno.notas[2])
console.log(alumno.notas[indice_final])
*/
alumno.notas[1]=20;






























