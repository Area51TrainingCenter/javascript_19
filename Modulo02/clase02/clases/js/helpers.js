class Hepler{
	static obtenerFecha(){
 		var fecha=new Date();
		var dia=fecha.getDate();
		var mes=fecha.getMonth();
		var anio=fecha.getFullYear();
		return dia + "/ " + mes + "/" + anio;

	}
	static limpiarEspaciosEnBlanco(valor){
		return valor.trim();
	}


}
