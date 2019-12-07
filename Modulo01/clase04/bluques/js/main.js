for (var i =0; i < 10; i++) {
	console.log(i)
}


estado=true;
indice=0;
while(estado=true){
	// console.log()
	indice++; // +1

	if(indice==5){
	estado=false;
	}
}


var condicion=1;

do{
	console.log("")
}while(condicion=2)

listado=["item1","item2","item3"]

for(let item of listado){
	console.log(item)
}

persona={
	nombre:"JC",
	apellido:"RT",
	estado:true
}

persona.nombre
persona.apellido
persona.estado


for(let pro in persona){
	persona[pro]  // JC
}


persona.nombre
persona["nombre"]