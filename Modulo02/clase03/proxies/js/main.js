var persona={
	nombre:"jc",
	correo:"jramos",
	password:"123***"
}
var user="empleado";

persona.nombre   // obtiene el valor  (Get)
 
persona.nombre="Juan Carlos" // actualiza el valor (Set) 


//const proxy = new Proxy(target, handler)

const manejador = {
	get(objetivo, propiedad) {

		if(propiedad=="password"){
			if(user=="admin"){
				return objetivo[propiedad];	
			}
			else{
				return "***********";		
			}
			
		}
		else{
			return objetivo[propiedad];	
		}
		//
	},
	set(objetivo, propiedad, valor) {
		if(propiedad=="nombre"){
				
			if(typeof valor=="number"){
				console.log("no puedes actualizar el nombre con un numero")
			}
			else{
				objetivo[propiedad] = valor;
			}
			//if(valor)
		}
		
		if(propiedad=="password"){
		
			console.log("no Puedes actualizar el password")
		
			//if(valor)
		}

	}
}



const personaProxy=new Proxy(persona,manejador)
/*

console.log(personaProxy.nombre); //get 
console.log(personaProxy.correo);
console.log(personaProxy.password);
*/
personaProxy.password="50";
console.log(personaProxy.nombre)