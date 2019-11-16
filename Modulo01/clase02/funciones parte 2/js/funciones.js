function igv(monto){
	let igv=monto*0.18;
	//*console.log(igv);
	return igv;
}

function HoraActual(){
	var nueva_fecha=new Date();
	var hora=nueva_fecha.getHours();
	var minutos=nueva_fecha.getMinutes();
	var segundos=nueva_fecha.getSeconds();
	return hora+":"+minutos+":"+segundos;
}

function altas(valor){
	return valor.toUpperCase();
}

function igv_variable(monto,igv=0.18){
	return monto*igv;
}

function demo(valor1,valor2){

}

/*

var ele;
ele.addEventeListener("click",function(){
	console.log("hola")
})


var obj={
	nombre:"JC",
	tarea:function(){

	}
}
*/
















