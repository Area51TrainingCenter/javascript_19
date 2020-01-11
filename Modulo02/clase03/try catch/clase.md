
# Try-Catch

La sentencia try...catch marca un bloque de instrucciones a intentar que pueden causar alguna excepción, y declarar una o más respuestas en caso de que una excepción sea arrojada. Si una excepción es arrojada, la sentencia try...catch se encarga de atraparla.

La sentencia try...catch consiste en un bloque try, el cuál contiene una o más instrucciones, y ninguno o varios bloques catch, conteniendo sentencias que especifican que hacer si una excepción es arrojada en un bloque try. Se desea que las instrucciones dentro del bloque try se ejecuten con éxito, de caso contrario caerán en el bloque catch para ser controladas. Si alguna instrucción dentro del bloque try (o en una función llamada dentro del bloque try) arroja una excepción, el control pasa inmediatamente al bloque catch. Si ninguna excepción es arrojada en el bloque try, el bloque catch es ignorado. Por último se ejecuta el bloque finally luego de que los bloques try y catch hayan sido ejecutados pero antes de las instrucciones que se encuentren a continuación de la sentencia try...catch.

```javascript

function getMonthName (mo) {
  mo = mo-1; // Ajusta el indice del arreglo para el arreglo de meses (1=Jan, 12=Dec)
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
                "Aug","Sep","Oct","Nov","Dec"];
  if (months[mo] != null) {
    return months[mo];
  } else {
    throw "InvalidMonthNo"; //Arroja la palabra "InvalidMonthNo" al ocurrir una excepción
  }
}

try { // instrucciones a probar
  monthName = getMonthName(myMonth); // La función puede arrojar una excepción
}
catch (e) {
  monthName = "unknown";
  logMyErrors(e); // Pasa el objeto de la excepción a un manejador de errores
}
```
## bloque Catch

Un bloque catch es usado para manejar todas las excepciones que pueden ser generadas en el bloque try.



# Trohw

Utiliza la sentencia throw  para lanzar una excepción. Cuando lanzas un excepción, se especifica la expresión que contiene el valor para ser lanzado:


Puedes lanzar cualquier expresión, no solo expresiones de un tipo especifico. En el siguente código lanzamos varias excepciones de varios tipos: 

```javascript

throw "Error2";   // Tipo string
throw 42;         // Tipo número
throw true;       // Tipo booleano
throw {toString: function() { return "¡Soy un objeto!"; } };
throw new RangeError("valor no permitido");


```
## tipos de errores

* EvalError: Raised when the eval() functions is used in an incorrect manner.
* RangeError: Raised when a numeric variable exceeds its allowed range.
* ReferenceError: Raised when an invalid reference is used.
* SyntaxError: Raised when a syntax error occurs while parsing JavaScript code.
* TypeError: Raised when the type of a variable is not as expected.
* URIError: Raised when the encodeURI() or decodeURI() functions are used in an incorrect manner.