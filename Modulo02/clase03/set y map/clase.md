# Maps 
El objeto Map almacena pares clave/valor. esto te va sonar muy parecido a un objeto , a continuación vamos a ver como se establecen los valores en un objeto Map


```javascript
miMapa=new Map();
// asignando valores

miMapa.set("dato1","JC")
miMapa.set("dato2","RT")
miMapa.size //
```
para poder obtener los valores de un objeto map, vamos a recurrir al metodo get 

```javascript

miMapa.get(claveCadena);

```


También podemos validar si existe una clave definida en el objeto con el metodo has

```javascript
miMapa.has("dato1");
```

### map vs object

Los Objetos son similares a los Maps en cuanto a que ambos permiten establecer claves a valores, recuperar dichos valores, eliminar claves, y detectar si existe algo almacenado en una clave determinada. Por esto, los Objects han sido usados históricamente como Maps; no obstante, hay diferencias importantes entre Objects y Maps que hacen mejor usar un Map en la mayoría de casos

* Las claves de un Object son Strings, mientras que para un Map pueden ser de cualquier tipo, incluyendo funciones, objetos y cualquier otro tipo primitivo. Puedes saber facilmente el tamaño de un Map usando la propiedad size, mientras que le número de propiedades en un Object tiene que ser deternminado manualmente.


* Un Map es un iterable lo que permite iterar directamente sobre el, mientras que si queremos iterar sobre un Object necesitamos obtener primero las claves de alguna forma para después iterar sobre el.


# Set
El objeto Set te permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u objetos de referencia.

Los objetos Set son colecciones de valores. Se puede iterar sus elementos en el orden de su inserción. Un valor en un Set sólo puede estar una vez; éste es único en la colección Set.

a continuación vamos a ver como podemos agregar valores a un objeto set

```javascript
const mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add('some text');

mySet.size // 3
```

vamos a darnos cuenta que el caso anterior si deseamos agregar un elemento que ya existe en la lista este no es agregado como un item nuevo 

```javascript
const mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add('some text');

mySet.size // 3

mySet.add(5);

mySet.size // 3

```

de la misma manera para buscar los elementos dentro de un set recurrimos al metodo has

```javascript
mySet.has(1)
```



Algo que puede suceder mucho en la ejecución de código es que queramos pasar de un arreglo al un set y viceversa , para esta situación analizemos las siguientes 2 lienas de código


```javascript 
var set = new Set([1,2,3]); // {1,2,3} genera un Set desde un Array
var arr = Array.from(set);//[1,2,3] genera un Array desde un Set
```

para poder recorrer un set pode usar las siguientes maneras:

```javascript
for (let item of mySet) console.log(item);

for (let item of mySet.keys()) console.log(item);

for (let item of mySet.values()) console.log(item);

```javascript