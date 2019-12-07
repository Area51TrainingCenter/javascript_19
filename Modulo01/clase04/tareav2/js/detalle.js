var parametros=getQueryParams(document.location.search);

obtenerSitioPorID(parametros.id)
function obtenerSitioPorID(valor){
	const xhr=new XMLHttpRequest();
	var url="https://sminnova.com/restapitrujillo/sitiosturisticos/id/"+valor
	xhr.open("GET",url);
	xhr.send(null)
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			
			var resultado=JSON.parse(xhr.responseText);
			console.log(resultado)
			resultado[0].nombre

			document.getElementById('title-detalle-bloque').innerHTML=resultado[0].nombre;
			document.getElementById('title-detalle').innerHTML=resultado[0].nombre;
			document.getElementById('foto-detalle').setAttribute("src",resultado[0].foto_principal)
			bloque_detalle.classList.remove("hide");
		}
	}
}

document.getElementById('back').addEventListener("click",()=>{
	
})



function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}


