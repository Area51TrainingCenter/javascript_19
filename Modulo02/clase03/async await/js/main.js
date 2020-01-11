
// funcion async
async function obtenerNotas(){
	console.log("hola");
	data=0;
	let url="http://192.168.2.46/rest/servicio/yape/usuarios";
	// aqui tareas asincronas / 10 o 6 segundos
	//return 10;
	/*	await fetch("http://192.168.2.46/rest/servicio/yape/usuarios")
	.then((data)=>{return data.json()})
	.then((data)=>{
		console.log(data) // 5s
	});
	*/
	var respuesta1 = await fetch(url)  // 20s
	var respuesta2 = await respuesta1.json(); //20s

	console.log("dentro de async");
	console.log(respuesta2);

	return data;

}


console.log("Hola");  //1 
var resultado=obtenerNotas().then(()=>{}); // 2 //promise  // 43 

console.log("Adios")  // 3   





//console.log(resultado);
//resultado.then((data)=>{console.log(data)});

/*
obtenerNotas() // 10 ERROR!
obtenerNotas() // Promise  =>  obtenerNotas().then((data)=>{})




function sumar(){
	var a=10;
	var b=20;
	var suma=a+b;
	return suma;
}


console.log("hola") // hola   1s 
sumar() // suma               2s
console.log("adios") //adios  3s

*/