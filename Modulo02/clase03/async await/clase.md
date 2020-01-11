# Async Await

Las promesas en Javascript nos sirven como alternativa para el manejo de nuestras funciones callbacks en Javascript. Así mismo, nos permiten administrar procesos asíncronos de una forma sencilla y mejor. Sin embargo, mientras que las promesas son una mejor alternativa en lugar de utilizar funciones callback, siguen utilizando muchos then's lo que puede ocasionar que el código sea difícil de leer. Para esto podemos usar las llaves async y await de ES2017 y, simplificar el manejo de las promesas. 

### Conceptos Básicos

* **async** es una palabra reservada para declarar una función.
* **await** es usada durante el manejo de la promesa.
* **await** debe ser usada dentro de la función async.
* La función **async** retorna una promesa.
* **async / await** ya se encuentran disponibles en la mayoría de los navegadores y en NodeJS.


### Beneficios de Utilizar Async/Await

* Tu código es más simple y preciso.
* El debugeo es más fácil ya que son menos callbacks.
* La conversión de la promesa then es fácil.
* Menos anidamientos en tu código.

Ejemplo básico :

```javascript 
// La función declarada como async para poder usar await.
async function obtenerContenido() {
  // En lugar de usar fetch().then, usamos await
  let contenido = await fetch('/');
  let texto = await contenido.text();

  // Dentro de la función async, el texto es el body de la petición
  console.log(texto);

  // Retornamos el texto
  return texto;
}

// Llamamos la función async
var promesa = obtenerContenido().then(...);



```

### Declaración de Async


```javascript
// Declaración de Función Async

async function main() {
  let valor = await fetch('/');
};


// Asignación A Una Variable 

let variable = async function main() {
  let valor = await fetch('/');
};

// Asiganción A Una Variable Usando el Operador de Flecha

let variable = async () => {
  let valor = await fetch('/');
};



```

### Manejo de errores con Async Await

Una promesa tradicional utiliza el callback catch para el manejo de rechazos. Cuando usamos await, la mejor manera de manejar errores es utilizar try / catch.
```javascript
try {
  let x = await miFuncionAsync();
}
catch(e) {
  // ¡Error!
}

// El try / catch no es tan elegante como el catch de una promesa, pero es igual de eficiente.
``

```javascript 
async function getCountry(){
    try {
        let response = await fetch('https://pkgstore.datahub.io/core/country-codes/country-codes_json/data/471a2e653140ecdd7243cdcacfd66608/country-codes_json.json')
        let json = await response.json()
        return json.map(country => country['CLDR display name'])
    } catch (err) {
        console.log("Error ==> ", err)
    }
}
```







https://www.oscarblancarteblog.com/2019/03/15/javascript-async-await/

https://www.oscarblancarteblog.com/2019/03/15/javascript-async-await/