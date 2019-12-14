if(!validarEstado()){
	window.location="index.html"
}

const id_usuario=localStorage.id_usuario;

var url_listado="http://192.168.2.44/rest/servicio/yape/amigos/id";
var datos=new FormData();
datos.set("id_usuario",id_usuario);
var parametros={
	method:"POST",
	body:datos
}
fetch(url_listado,parametros)
.then((data)=>{return data.json()})
.then((data)=>{

	console.log(data)
armarLista(data);
});


const btndeslogear=document.getElementById('deslogear');
btndeslogear.addEventListener("click",()=>{
deslogear();
})




function armarLista(data){
	var temp=""
	for(item of data){
		temp=temp+`<li>${item.nombres}-${item.telefono}</li>`

			
	}
	document.getElementById('listado').innerHTML=temp;
}