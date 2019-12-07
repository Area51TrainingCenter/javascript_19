const btn_agregar=document.getElementById('agregar');
const listado=document.getElementById('listado');
btn_agregar.addEventListener("click",()=>{
	var nombre=document.getElementById('inp-nombre').value;
	var correo=document.getElementById('inp-correo').value;
	/*listado.innerHTML='<div class="card" style="width: 18rem;">'
  +'<img src="https://via.placeholder.com/300x200" class="card-img-top" alt="...">'
  +'<div class="card-body">'
    +'<h5 class="card-title">'+nombre+'</h5>'
    +'<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>'
    +'<a href="#" class="btn btn-primary">Go somewhere</a>'
  +'</div>'
+'</div>'*/
	listado.innerHTML=`
	<div class="card" style="width: 18rem;">
	  <img src="..." class="card-img-top" alt="...">
	  <div class="card-body">
	    <h5 class="card-title">${nombre}</h5>
	    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	    <span>${correo}</span>
	    <a href="#" class="btn btn-primary"></a>
	  </div>
	</div>
	`
})