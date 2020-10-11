function validar(){

	var nombre=document.getElementsById("txtNombre").value;

	var apellido=document.getElementsById("txtApellido").value;
	if(nombre.lenght<1){
		return false;
	}

	if(apellido.lenght<1)
	{
		return false;
	}

	return true;
}


//Obtener parametros de url
console.log(window.location.search);
console.log((window.location.search).split("&"));

//funcion ya creada para obtener los parametros de una URL
function getParamURL(name) {
  return decodeURIComponent(
  	(new RegExp('[?|&]' + name + 
  		'=' + '([^&;]+?)(&|#|;|$)').exec(location.search)
  	||[,""])[1].replace(/\+/g, '%20'))||null
}

console.log(getParamURL("txtNombre"));