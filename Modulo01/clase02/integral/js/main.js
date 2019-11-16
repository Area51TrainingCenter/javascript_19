var productos;
var resultado_productos=[];


crearDatos();
let ele=document.getElementById('btn_consultar');
ele.addEventListener("click",ejecutar)

function ejecutar(){
	var categoria_a_buscar=document.getElementById('inp_categoria').value;
	//
	buscarPorCategoria(categoria_a_buscar);
}


function crearDatos(){
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
	productos=[producto1,
				   producto2,
				   producto3,
				   producto4,
				   producto5]
}

function buscarPorCategoria(valor){
	resultado_productos=[];

	for(var i=0;i<productos.length;i++){
		if(productos[i].categoria==valor){
			resultado_productos.push(productos[i])
		}
	}
	mostrarResultado();
	/*if(resultado_productos.length==0){
		console.log("la categoria no cuenta con elementos")
	}
	else{
		console.log(resultado_productos);	
	}*/
	
}

function mostrarResultado(){
	var listado=document.getElementById('listado_respuesta');
	listado.innerHTML="";
	var estructura="";
	for (var i = 0; i < resultado_productos.length; i++) {
		estructura=estructura+"<li class='list-group-item'>"+resultado_productos[i].nombres+"</li>"
	}
	listado.innerHTML=estructura;
}

