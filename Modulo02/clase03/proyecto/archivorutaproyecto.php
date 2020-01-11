<?php 
header('Access-Control-Allow-Origin: *');
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
date_default_timezone_set('America/Bogota');
$app = new \Slim\App();

$app->get("/yape/usuarios",function(Request $request, Response $response, array $args){
	try{ 
		$consulta="select * from usuarios";
		$db=new db();
		$db= $db->conectar();	
		$ejecutar = $db->query($consulta);
		$datos=null;
		foreach ($ejecutar as $key => $value) {
				$datos[]=$value;
		}

		if($datos){
				echo json_encode($datos);	
		}	
		else{

			$error = array(
			    'error' => 1,
			    'detalle' => 'Datos incorrectos'
			);
 
			echo json_encode($data);

		}
	
	}
	catch(\Exception $e){
		echo "{error: {text:".$e->getMessage()."}";
	}
});



$app->post("/yape/usuarios/login",function(Request $request, Response $response, array $args){
	try{ 

		$data = $request->getParsedBody();

        $usuario=$data["usuario"];
        $password=$data["password"];
		$consulta="select * from usuarios where usuario='$usuario' and password='$password'";
		$db=new db();
		$db= $db->conectar();	
		$ejecutar = $db->query($consulta);
		$datos=null;
		foreach ($ejecutar as $key => $value) {
				$datos[]=$value;
		}

		if($datos){
				echo json_encode($datos);	
		}	
		else{
			$error = array(
			    'error' => 1,
			    'detalle' => 'Datos incorrectos'
			);
 
			echo json_encode($error);
		}
	
	}
	catch(\Exception $e){
		echo "{error: {text:".$e->getMessage()."}";
	}
});



$app->post("/yape/amigos/registro",function(Request $request, Response $response, array $args){

		try{
		$data = $request->getParsedBody();

        $nombres=$data["nombres"];
        $telefono=$data["telefono"];
        $id_usuario=$data["id_usuario"];
        $consulta = "INSERT INTO amigos (nombres, telefono, id_usuario,estado) VALUES ('$nombres', '$telefono','$id_usuario',1)";


        $db=new db();
		$db= $db->conectar();	

		
		$ejecutar = $db->query($consulta);
		$db=null;
		if($ejecutar){
			echo "{estado: {codigo:1,text:registro realizado con éxito}";
		}
		else{
			echo "{estado: {codigo:0,text:No se pudo realizar el registro ,revisar los datos ingresados }";
		}
	}
	catch(\Exception $e){
		echo "{error: {text:".$e->getMessage()."}";
	}



	});


$app->post("/yape/pago/registro",function(Request $request, Response $response, array $args){

		try{
		$data = $request->getParsedBody();

        $nombres=$data["nombres"];
        $telefono=$data["telefono"];
        $id_usuario=$data["id_usuario"];
           $monto=$data["monto"];
        $consulta = "INSERT INTO pago (nombres, telefono, id_usuario,monto) VALUES ('$nombres', '$telefono','$id_usuario','$monto')";


        $db=new db();
		$db= $db->conectar();	

		
		$ejecutar = $db->query($consulta);
		$db=null;
		if($ejecutar){
			echo "{estado: {codigo:1,text:registro realizado con éxito}";
		}
		else{
			echo "{estado: {codigo:0,text:No se pudo realizar el registro ,revisar los datos ingresados }";
		}
	}
	catch(\Exception $e){
		echo "{error: {text:".$e->getMessage()."}";
	}



	});



$app->post("/yape/amigos/id",function(Request $request, Response $response, array $args){
		$data = $request->getParsedBody();

        $id_usuario=$data["id_usuario"];


        try{ 
		$consulta="select * from amigos where id_usuario='$id_usuario'";
		$db=new db();
		$db= $db->conectar();	
		$ejecutar = $db->query($consulta);

		$datos=null;
		foreach ($ejecutar as $key => $value) {
				$datos[]=$value;
		}

		if($datos){
				echo json_encode($datos);	
		}	
		else{
			echo "{error: {text:datos ingresados no son correctos}";
		}
	



	}
	catch(\Exception $e){
		echo "{error: {text:".$e->getMessage()."}";
	}



     
	});


$app->post("/yape/pago/historico",function(Request $request, Response $response, array $args){
		$data = $request->getParsedBody();

        $id_usuario=$data["id_usuario"];


        try{ 
		$consulta="select * from pago where id_usuario='$id_usuario'";
		$db=new db();
		$db= $db->conectar();	
		$ejecutar = $db->query($consulta);

		$datos=null;
		foreach ($ejecutar as $key => $value) {
				$datos[]=$value;
		}

		if($datos){
				echo json_encode($datos);	
		}	
		else{
			echo "{error: {text:datos ingresados no son correctos}";
		}
	



	}
	catch(\Exception $e){
		echo "{error: {text:".$e->getMessage()."}";
	}



     
	});




?>