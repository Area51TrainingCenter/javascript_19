leerDatos();
leerComentarios();
function leerDatos(){

			
			var usuariosRef=firebase.database().ref("usuarios");
			usuariosRef.on("value",function(data){
							$("#listado").html("")
							let listado=data.val();
				
								for (let key in listado){
								//console.log(listado[key]);
								$("#listado").append(`<li class="list-group-item">${listado[key].nombre} ${listado[key].apellido}</li>`)
								}
			})


		}

function leerComentarios(){

	var comentariosReferencia=firebase.database().ref("comentarios");
	comentariosReferencia.on("value",function(data){
		$(".comentarios").html("");
					let listado=data.val();
				
								for (let key in listado){
								//console.log(listado[key]);
								$(".comentarios").append(`<p> ${listado[key].comentario} <small>(lo dijo: ${listado[key].usuario})</small></p>`)
								}
	})
}


$("#agregarComentario").click(function(){
			let hora=new Date();
			let hora_formato=hora.getHours() + ":" + hora.getMinutes()+ ":"+hora.getSeconds();
			let comentario_value=$("#inp-comentario").val()
				
			let comentario_obj={
				comentario:comentario_value,
				hora:hora_formato,
				usuario:localStorage.nombre+" "+ localStorage.apellido
			}

			firebase.database().ref("comentarios").push(comentario_obj)
})