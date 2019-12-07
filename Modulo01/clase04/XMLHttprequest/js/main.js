hacerPeticion();

const cargarUsuarios=document.getElementById('cargarUsuarios');
cargarUsuarios.addEventListener("click",()=>{
	//document.getElementById('listado').innerHTML="CARGANDO... ESPERA UN MOMENTO";
	document.getElementById('modal2').classList.remove("hide");

	hacerPeticion();
})

function hacerPeticion(){
	let xhr =new XMLHttpRequest();

	let url="https://sminnova.com/restapitrujillo/sitiosturisticos/categoria/1";

	xhr.open("GET",url)

	xhr.send(null);

	xhr.onreadystatechange=function(){
	
	if(xhr.readyState==4){

		
		var resultado=JSON.parse(xhr.responseText);
	
		let temporal='';
		for(let item of resultado)
		{
			/*console.log(item.name);
			console.log(item.email);
			console.log(item.website);
			console.log(item.company.name);
			temporal=temporal+armarHTML(item.name,item.email,item.company.name,item.website)
		*/
		}
		document.getElementById('modal2').classList.add("hide");
		document.getElementById('listado').innerHTML=temporal;
		
	}	
}



}

function armarHTML(nombre,correo,empresa,website){
	
	return `<div class="col-md-4 mb-4"><div class="card" style="width: 18rem;">
			  <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="...">
			  <div class="card-body">
			    <h5 class="card-title">${nombre}</h5>
			    <p class="card-text">${correo}</p>
			    <a href="${website}" class="btn btn-primary">${empresa}</a>
			  </div>
			</div></div>`
}

/*
GET -> Obtener Infomracion
POST -> ENVIAR Infomracion -> grabarla

DELETE -> ENVIAR Infomracion -> para borrar
PUT -> ENVIAR Infomracion -> Actualizar*/
