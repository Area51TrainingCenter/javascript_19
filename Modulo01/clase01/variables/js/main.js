//console.log("Hola");

// Sintaxis
/*
imprimir texto

console.log("texto")
echo "Texto"
System.out.print("Texto")
print("Texto")
Print("Texto")
COUT<<"Texto"*/

// Palabras Reservadas
/*
if
else
var
switch
for
while
*/

// variables

var dato; 
dato='él dijo: "Hola que tal!"  y el repsondio: "asd asd"  ';

var texto1;
var texto2;
texto1="Hola";
texto2="Bienvenido";
var texto4;
texto4="al curso de js";

var texto3;
texto3=texto1+' '+texto2+" "+texto4;
// texto3="Hola Bienvenido"

console.log(texto3);
// cadena string
// "" comillas dobles 
// '' comillas simples
/*Hola;
"Hola";
*/


//var nombre=prompt("Ingresa tu nombre");

//console.log("Bienvenido al curso" + " " +nombre);

/*
var texto_1;
console.log(texto_1);
var texto_1="sjuan Carlos";
console.log(texto_1.length)
console.log(texto_1);
console.log(texto_1.toLowerCase());
console.log(texto_1.toUpperCase());
console.log(texto_1.trim());

var num1;
var num2;

num1=10;
num2=30;

var suma=num1+num2;
console.log(suma);


console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
*/
/*var num_1=prompt("ingresa n1")

var num_2=prompt("ingresa n2")

var num_3=prompt("ingresa n3")


var suma=parseInt(num_1)+parseInt(num_2)+parseInt(num_3);
*/
	// var numero1="10";
    // parseInt(numero1)  / 10  
   // parseInt("10");

var pi=Math.PI
var maximo=Math.max(10,20,30,42,405);  // 405
var minimo=Math.min(10,203,2,4,1); // 1
var superior=Math.ceil(10.1) // 11
var inferior=Math.floor(5.9) // 5
var redondeo= Math.round(3.2) //3
var random=Math.random() // 0 y 1
var digitos=random*100;
var final=Math.round(digitos);
/*
console.log(final);

var estado;
estado=true;
estado=false;
estado=null;
estado=NaN;
estado=0;

login_usuario=validarUsuario();


if(login_usuario){
 	// true
}
else{
	// false
}


function validarUsuario(){
	return true;
	return false;
}
*/




var fecha="10/10/2019";
var nueva_fecha=new Date();
console.log(fecha);
console.log(nueva_fecha);

var hora=nueva_fecha.getHours();
var minutos=nueva_fecha.getMinutes();
var segundos=nueva_fecha.getSeconds();
console.log(hora+":"+minutos+":"+segundos);

var fecha=nueva_fecha.getDate();
var mes=nueva_fecha.getMonth();
var anio=nueva_fecha.getFullYear();

console.log(fecha);
console.log(mes+1);
console.log(anio);
var dia_semana=nueva_fecha.getDay();

console.log(dia_semana+1);































