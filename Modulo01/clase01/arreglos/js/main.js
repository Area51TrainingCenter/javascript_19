var dato="texto"
var num=20;
var estado=true
var fecha=new Date;

var notas=[19,20,15];
var booleanos=[true,true,false,false,true];
var fecha1=new Date();
var fecha2=new Date();

var fechas=[fecha1,fecha2];

var datos_varios=["Juan",20,fecha1,true,"0001"];


var nombre1="Alfredo";
var nombre2="Narda";
var nombre3="Luis";
//var listado_nombres=[];
var listado_nombres=["Alfredo","Narda","Luis","Carlos"];
console.log(listado_nombres);

console.log(listado_nombres[0]);
console.log(listado_nombres[1]);
console.log(listado_nombres[2]);
console.log(listado_nombres[3]);


var fecha=new Date();
var indice=fecha.getDay(); // 1

var dias_semana=["Domingo",
				 "Lunes",
				 "Martes",
				 "Miercoles",
				 "Jueves",
				 "Viernes",
				 "Sábado",
				 ]

console.log(dias_semana[indice]);

var meses=["Enero",
		   "Febrero",
		   "Marzo",
		   "Abril",
		   "Mayo",
		   "Junio",
		   "Julio",
		   "Agosto",
		   "Septiembre",
		   "Octubre",
		   "Noviembre",
		   "Diciembre"
		   ]

var indice_mes=fecha.getMonth();
console.log(meses[indice_mes]);	
console.log(fecha);
console.log("Hoy "+dias_semana[indice] +" "+fecha.getDate()+" de "+meses[indice_mes]+ " del año " + fecha.getFullYear());	   








var nombres=[5]; // tienen un elemento
console.log(nombres);
var edades=Array(5); // le definies que el arreglo tiene 5 elementos
console.log(edades)


var gustos=[];
console.log(gustos)
// agregar elementos al final
gustos.push("Terror");
gustos.push("Comedia");
gustos.push("Ficción");
gustos.push("Animes");
// remover elementos al final
console.log(gustos);
console.log(gustos.pop());
console.log(gustos);

// agreamos elementos al incio
gustos.unshift("Novelas");
console.log(gustos);

// eliminamos elementos del inicio
gustos.shift();
console.log(gustos);
gustos.shift();
console.log(gustos);

console.log(edades);
edades.push(20);
edades.pop();
edades.pop();
edades.pop();
console.log(edades);
edades.unshift("Hola")
console.log(edades);

edades[1]="MODIFICADO";
edades[2]="nuevo";
edades[3]="último";
console.log(edades);
edades.push("Texto");
console.log(edades);



var usuario=["Diego","Torres","0002",false];
console.log(usuario);
console.log(usuario.join(","))

var texto="juan,ramos,0001,true";
var separados=texto.split(",");
console.log(texto);
console.log(separados);
console.log(separados[3]);