var bloque_listado=document.getElementById('bloque-listado');
var bloque_detalle=document.getElementById('bloque-detalle');

var listado=document.getElementById('listado');
cargarSitios(1);

function cargarSitios(categoriaID){

let url="https://sminnova.com/restapitrujillo/sitiosturisticos/categoria/"+categoriaID
const xhr=new XMLHttpRequest();
xhr.open("GET",url);
xhr.send(null)
xhr.onreadystatechange=function(){
	if(xhr.readyState==4){
		var resultado=JSON.parse(xhr.responseText);
		
		let temporal="";
		for(let item of resultado){
			temporal=temporal+armarItem(item.id,item.foto_principal,item.nombre,item.direccion)
		}
		listado.innerHTML=temporal;
		
	}
}
}





function armarItem(id,foto_principal,nombre,direccion){
return `<article class="item-sitio" onclick="verdetalle(${id})">
					<div class="foto-sitio"><img src="${foto_principal}" alt="">
						</div>
						<div class="info-sitio">
							<h2>${nombre}</h2>
							<span>${direccion}</span>
						</div>
				</article>`

}
function categoria(valor){
	listado.innerHTML=`<img class="loading" src="https://thumbs.gfycat.com/LoneDetailedFairybluebird-max-1mb.gif">`;
	cargarSitios(valor)
}


function verdetalle(valor){
	bloque_listado.classList.add("hide");
	
	obtenerSitioPorID(valor)
}
function obtenerSitioPorID(valor){
	const xhr=new XMLHttpRequest();
	var url="https://sminnova.com/restapitrujillo/sitiosturisticos/id/"+valor
	xhr.open("GET",url);
	xhr.send(null)
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			
			var resultado=JSON.parse(xhr.responseText);
			console.log(resultado)
			resultado[0].nombre

			document.getElementById('title-detalle-bloque').innerHTML=resultado[0].nombre;
			document.getElementById('title-detalle').innerHTML=resultado[0].nombre;
			document.getElementById('foto-detalle').setAttribute("src",resultado[0].foto_principal)
			bloque_detalle.classList.remove("hide");
		}
	}
}

document.getElementById('back').addEventListener("click",()=>{
	bloque_detalle.classList.add("hide");
	bloque_listado.classList.remove("hide");
})
/*
var opciones=document.getElementsByClassName('opc');
for(let item of opciones){
	item.addEventListener("click",()=>{
		alert("click");
	})
}*/
