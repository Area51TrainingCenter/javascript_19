/*var arreglos=[1,2,3,4]

for( var i=0;i<4;i++){
	console.log(areglos[i])
}

for (let item of arreglos){
	console.log(item)
}
*/

var numeros=[3,4,5]
var nuevos_numeros=[];

for(let item of numeros){
	nuevos_numeros.push(item*2);
}

console.log(nuevos_numeros);

var nuevos=numeros.map((data)=>{ return data*3});
console.log(nuevos);


var nombres=["juan","Diego"," Luis ","Marìa  "];


var nuevos_nombres=nombres.map((nombre)=>{ 
	return nombre.trim().toLowerCase()
})
console.log(nuevos_nombres)



let listado=["a","b","c"];
	listado.reduce(function(acumulador,valor_actual,index,arreglo){
		console.log(acumulador);
		return acumulador+valor_actual
},0)




var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(function(data){
	let estado=false;
	if(data=="limit"){
		estado=true;
	}
	return estado; 
});
console.log(result);







var listado2 = [5, 12, 8, 130, 44];
var producto=[{producto:"pro1",stock:0},{producto:"pro2",stock:11},{producto:"pro3",stock:10},]
var found = producto.find(function(element) {
	console.log(element.stock)
  return element.stock > 10;
});

console.log(found)



var lista3 = ['a', 'b', 'c'];

lista3.forEach(function(element) {
  console.log(element);
});


for(let item of lista3){

}

var lista4= ['a', 'b', 'c'];
var respuesta=lista4.join()
console.log(respuesta);

//                0      1          2       3        4
var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
var masculinos = nombres.slice(1, 3);

console.log(masculinos)


var frutas = ['guindas', 'manzanas', 'bananas'];
frutas.sort()
console.log(frutas);


var puntos = [1,3,5,10,2, 21]; 

puntos.sort()
console.log(puntos)



var array1 = [1,4,2,3];

console.log(array1.includes(4));
