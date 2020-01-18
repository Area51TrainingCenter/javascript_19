class Pago{
	constructor(){

	}
	registrarPago(_nombre,_telefono,_pago){
		let obj_pago={
			nombre:_nombre,
			telefono:_telefono,
			dni:localStorage.dni,
			pago:_pago
		}
		console.log(obj_pago);
		firebase.database().ref("pagos").push(obj_pago);
	}
	listadoPago(id_usuario){
		//
	}
}