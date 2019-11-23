/*console.log(sessionStorage.logeado);
sessionStorage.logeado=true;
console.log(sessionStorage.logeado);
*/
var title=document.getElementById('texto');
if(localStorage.estado=="true"){
	title.innerHTML="ya te encuentras logeado";
}
else{
	title.innerHTML="Necesitas Logearte";
}

console.log(localStorage.estado)
localStorage.estado=true;
console.log(localStorage.estado)




