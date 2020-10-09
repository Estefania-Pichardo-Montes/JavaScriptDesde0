try{
	var a=100;

	// throw 1;

	throw{
		nombreError:"Error tipo 1",
		accion:"Salir corriendo y echarle agua al servidor xdxd",
		codeError:1
	}

	throw new Error('Error Tipo1');

	if(a===100){
		throw 'Que mal';
	}
	else{
		throw 'ohoh!';
	}

	console.log("El valor de a:",a);
}
catch(e){

	console.log("Error de catch:",e.message);
	console.log(e.nombreError);
	console.log(e.codeError);
	console.log(e.accion);

	if(e==="QUe mal"){
		console.log("Error tipo 1");
	}
	if(e==='ohoh!'){
		console.log("Error tipo 2");
	}
}
finally{
	console.log("Finalmente");
}

function registroErrores(e) {
	var ahora= new Date();
	console.log("Se registro un error: "
		, e, " a las: ", ahora.getTime());
}