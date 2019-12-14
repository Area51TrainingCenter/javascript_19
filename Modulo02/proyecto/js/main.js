if(validarEstado()){
	window.location="listado.html"
}

const btn_login=document.getElementById('btn_login');
const form=document.getElementById('formulario-login')
const error=document.getElementById('error');

btn_login.addEventListener("click",()=>{
	// obtengo los valores del formulario y los asocio y guardo en la variable
	let dataLogin=new FormData(form);
	var url="http://192.168.2.44/rest/servicio/yape/usuarios/login"
	const parametros={
		method:"POST",
		body:dataLogin
	}
	fetch(url,parametros)
	.then((data)=>{return data.json()})
	.then((data)=>{
		if(data.length==undefined){
			error.classList.add("show");
			setTimeout(function(){
				error.classList.remove("show");
			},4000)
		}
		else{
			logear(data[0].id);
			window.location="listado.html"
		}
	})
})


