/*
var peticion1=new Promise((resolve, reject)=>{

	// dependiendo de la logica
	reject();
})
.then(()=>{
	console.log("se ejecuta el then")
})
.catch(()=>{
	console.log("se ejecuta el catch")
})*/


var peticion1=new Promise((resolve, reject)=>{
	// dependiendo de la logica
	var datos=[1,2,3,4,5]
	reject(datos);
})
.then((datos)=>{
	console.log(datos)

	console.log("esto en el then")
},(valores)=>{
	console.log(valores)
	console.log("estoy en el catch")
})
