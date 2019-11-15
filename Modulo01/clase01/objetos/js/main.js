/*
var carro=[
		0=>"Toyota",
		1=>1998,
		2=>4,
		3=>3,
		4=>2000,
		5=>10000,
		6=>3];
*/


var carro1={
	marca:"Toyota",
	anio:1998,
	puertas:4,
	cilindros:3,
	precio:10000
}


console.log(carro1);
console.log(carro1.marca);
console.log(carro1.puertas)

console.log(carro1.precio);
console.log(carro1["precio"]);


var dato="cilindros";

carro1.dato; // esto no funciona
carro1[dato]; // esto si fucniona 



var carro2={
	marca:"Lexus",
	anio:1998,
	puertas:4,
	cilindros:3,
	precio:10000
}


var carro3={
	marca:"Audi",
	anio:1998,
	puertas:4,
	cilindros:3,
	precio:10000
}

var listado_carros=[carro1,carro2,carro3];
console.log(listado_carros);

listado_carros.marca;





var obj_seleccionado=listado_carros[0];

console.log(obj_seleccionado.marca);