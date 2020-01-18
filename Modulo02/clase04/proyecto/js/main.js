//console.log(firebase);

let obj_usuario=new Usuario();
let f_login=document.getElementById('f-login');

let btn_login=document.getElementById('btn-login');
btn_login.addEventListener("click",()=>{

	let data=new FormData(f_login);
		
	var estado=obj_usuario.validarUsuario(data) 
	estado.then((data)=>{
		if(data==true){
			window.location="listado.html";
		}
		else {
			alert("datos incorrectos");
		}

	})

	/*console.log(estado);
	if(estado==true){
		console.log("estoq uiere decir que los datos son correctos")
	}
	else{
		console.log("DATOS INCORRECTOS")		
	}*/

})