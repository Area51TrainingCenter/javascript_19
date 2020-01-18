class Usuario{
	constructor(nombre,telefono){
		this.nombre=nombre;
		this.telefono=telefono;
	}
	getNombre(){
		return this.nombre;
	}
	getTelefono(){
		return this.telefono;
	}

	registrarUsuario(){
		//
	}

	async validarUsuario(data){
		var estado_validacion=false;
		console.log("estoy ejecutando la funcion dentro del objeto")
		let user=data.get("user");
		let password=data.get("password"); 

		var usuarios=firebase.database().ref("usuarios")
		// el metodo on te permite leer los datos y trabajar una escucha continua
		// el metodo once te permite leer los datos una sola vez
		await usuarios.once("value",function(data){
			// resultados se obtienen de data.val()
			var resultados=data.val();
			console.log(resultados);
			//resultados;
			for (let propiedad in resultados){
				
				if(user==propiedad){
					let password_=resultados[propiedad].password;
					if(password==password_){

						estado_validacion=true;
						localStorage.dni=user;
					}
					else{
						estado_validacion=false;

					}

				}

			}
		})
		return estado_validacion;

	}

}