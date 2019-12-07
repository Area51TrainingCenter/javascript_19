const listado=document.getElementById('personas');

listado.innerHTML=outputPersona("Diego Carlos", "Ramos","jramos@gmail.com")

function outputPersona(...datos){
	var [nombre,apellido,correo]=datos;

	return `<div class="card" style="width: 18rem;">
			  <img src="..." class="card-img-top" alt="...">
			  <div class="card-body">
			    <h5 class="card-title">${nombre} ${apellido}</h5>
			    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			    <a href="#" class="btn btn-primary">${correo}</a>
			  </div>
			</div>`

}
