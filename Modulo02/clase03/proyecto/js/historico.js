if(!validarEstado()){
	window.location="index.html"
}

obtenerPagos();
function obtenerPagos(){

	let url="http://192.168.2.46/rest/servicio/yape/pago/historico";
	var datos=new FormData();
	datos.append("id_usuario",localStorage.id_usuario);

	let config={
		method:"POST",
		body:datos
	}

	fetch(url,config)
	.then((data)=>{return data.json()})
	.then((data)=>{
		console.log(data);
		pintarHistorico(data);
	})
}

function pintarHistorico(data){

	let row="";
	var ind=1;
	for(let item of data){
		row=row+`<li>
		<span class="ubicacion bg-blue">${ind}</span>
		<span class="nombres">${item.nombres}</span>

		<span class="monto">S/ <strong>${item.monto}</strong></span>
		</li>`;
		ind++;
	}

	document.getElementById('resultado-lista').innerHTML=row;

}