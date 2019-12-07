function cambiar(){
	alert("hizo click");
}

let title2=document.getElementById('title')
title2.addEventListener("click",()=>{
	document.getElementById('title-modal').innerText="Titulo 2";
	document.getElementById('bloque-modal').classList.remove("hide")
})