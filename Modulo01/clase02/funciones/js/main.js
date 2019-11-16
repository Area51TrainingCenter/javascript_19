
function mayorEdad(valor){
	if(valor>18)
	{
		console.log("es mayor de edad");
	}
	else{
		console.log("no eres mayor de edad");
	}
}



var producto1={
	nombres:"producto1",
	stock:20,
	categoria:"celulares",
	precio:1.00
}
var producto2={
	nombres:"producto2",
	stock:20,
	categoria:"celulares",
	precio:1.00
}
var producto3={
	nombres:"producto3",
	stock:20,
	categoria:"computo",
	precio:1.00
}
var producto4={
	nombres:"producto4",
	stock:20,
	categoria:"computo",
	precio:1.00
}

var producto5={
	nombres:"producto5",
	stock:20,
	categoria:"geek",
	precio:1.00
}
var productos=[producto1,
			   producto2,
			   producto3,
			   producto4,
			   producto5]

console.log(productos);


var cat=prompt("ingresa una categorias","celulares");

var resultado_productos=[];

buscarPorCategoria(cat);

function buscarPorCategoria(valor){

	for(var i=0;i<productos.length;i++){
		if(productos[i].categoria==valor){
			resultado_productos.push(productos[i])
		}
	}
	if(resultado_productos.length==0){
		console.log("la categoria no cuenta con elementos")
	}
	else{
		console.log(resultado_productos);	
	}
	
}