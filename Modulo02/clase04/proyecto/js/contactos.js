class Contactos{
	constructor(){

	}
	agregarContacto(data){

		let obj_contacto={
			nombre:data.get("nombre"),
			telefono:data.get("telefono"),
			dni:localStorage.dni
		}
		console.log(obj_contacto);
		firebase.database().ref("contactos").push(obj_contacto);
	}
	listarContactos(){
		var contactos=firebase.database().ref("contactos")
		// el metodo on te permite leer los datos y trabajar una escucha continua
		// el metodo once te permite leer los datos una sola vez
		 contactos.on("value",function(data){
			// resultados se obtienen de data.val()
			var resultados=data.val();
			console.log(resultados);
			let elelemto=document.getElementById('lista-amigos');
			let listado="";
			for (let item in resultados){
				console.log(resultados[item].nombre);
				console.log(resultados[item].telefono);
				listado=listado+`<li onclick="pagar(${resultados[item].telefono},'${resultados[item].nombre}')" class="list-group-item">${resultados[item].nombre} <span class="float-right">${resultados[item].telefono}</span>	</li>`

			}
			elelemto.innerHTML=listado;
		})


			
	}
}