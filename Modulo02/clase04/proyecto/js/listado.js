let contactos=new Contactos()
let pago=new Pago();
contactos.listarContactos();


document.getElementById('btn-agregar').addEventListener("click",()=>{
	let data=new FormData(document.getElementById('f-agregar'));
	contactos.agregarContacto(data);

})


function pagar(telefono,nombre){
	

	var valor=prompt("Ingresar el monto a Pagar")
	pago.registrarPago(nombre,telefono,valor);



}