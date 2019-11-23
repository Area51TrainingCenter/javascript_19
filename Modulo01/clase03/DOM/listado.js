var listado_productos=[
{nombre:"Producto1",precio:10},
{nombre:"Producto2",precio:30},
{nombre:"Producto3",precio:40}
]

var seleccionado;

var agregados=document.getElementById('agregados')

var listado=document.getElementById('listado');

cargarProductos()


function cargarProductos(){
	
	for(var i=0;i<listado_productos.length;i++){
		listado.innerHTML=listado.innerHTML+'<li onclick="producto('+i+')" id="item-'+i+'" class="list-group-item">'+listado_productos[i].nombre+'</li>'
	}
}



function producto(indice){
	
seleccionado=listado_productos[indice];


}

btn=document.getElementById('btn-agregar')
btn.addEventListener("click",function(){

console.log(seleccionado)
agregados.innerHTML=agregados.innerHTML+"<li class='list-group-item'>"+seleccionado.nombre+"</li>"

})
/*
var item=document.getElementById('item')
item.addEventListener("click",function(){
	console.log("click en item");
})

var item0=document.getElementById('item-0')
item0.addEventListener("click",function(){
	console.log("click en item 0");
})
*/
