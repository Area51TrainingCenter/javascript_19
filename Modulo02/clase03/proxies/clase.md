# Proxies
Los proxies son otra de las features interesantes que han llegado con ES6, y básicamente su función es la de definir un comportamiento personalizado cada vez que se accede a las propiedades de un objeto.

Un Proxy por sí mismo no hace gran cosa, pero podemos definir ‘trampas’ para interceptar las operaciones de bajo nivel con el objeto target u objeto destino, incluidas las llamadas a funciones. Es aquí donde reside la potencia y lo interesante de los proxies.

´´´javascript
const proxy = new Proxy(target, handler)
´´´

Os dejo el link de la lista de los posibles interceptores que podemos utilizar en un Proxy para que investiguéis un poco, ahora veamos en detalle algunos de los más interesantes .

## get / set 

Las ‘trampas’ más comunes serán las que intercepten cuando leemos o escribimos propiedades en el objeto, para ello podemos utilizar una ‘trampa’ get que se activará cada vez que se intente obtener un valor del objeto target, o un set que se activará cada vez que se intente setear una propiedad de nuestro objeto target.

´´´javascript

const alumno = {nombre: "JC", apellido: "RT", edad: 30}
alumno.nombre
alumno["nombre"]  = "Ivan"


const manejador = {
	get(objetivo, propiedad) {
		return objetivo[propiedad].toUpperCase()
	},
	set(objetivo, propiedad, valor) {
		if(propiedad=="edad") {
			if(isNaN(valor) || valor<=0) {
				throw new TypeError("No es un número")
			} else {
				objetivo[propiedad] = valor
			}
		} else {
			objetivo[propiedad] = valor.toUpperCase()
		}
	}
}

const alumnoProxy = new Proxy(alumno, manejador)
console.log(alumnoProxy.nombre)
alumnoProxy.apellido = "DIEGO"
console.log(alumnoProxy.apellido)
´´´

