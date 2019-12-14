var xhr=new XMLHttpRequest()
var url="http://192.168.2.44/api/";
/*xhr.open("GET",url)
xhr.send(null)
xhr.onreadystatechange=function(){
	if(xhr.readyState==4)
	{
		console.log(xhr.response);
		var resultado=JSON.parse(xhr.response);
		console.log(resultado)
	}
}*/
var url2="http://192.168.2.44/api/registro.php";
xhr.open("POST",url2)
var datos=new FormData()
datos.set("nombre","JC");
datos.set("apellido","RT");
datos.set("telefono","123123")
xhr.send(datos);
xhr.onreadystatechange=function(){
	if(xhr.readyState==4)
	{
		console.log(xhr.response);
		var resultado=JSON.parse(xhr.response);
		console.log(resultado)
		if(resultado.estado==true){
			alert("se realizo el registro éxito");
		}
	}
}


