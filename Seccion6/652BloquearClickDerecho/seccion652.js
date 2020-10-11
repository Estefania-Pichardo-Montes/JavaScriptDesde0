document.onmousedown=function(arg){
	//Aqui es para que solo bloquee cuando haces click derecho
	if(arg.button==2)
	{
		alert("Click blockeado");
		return;
	}
	console.log("No hay problema");
	console.log(arg);
}

document.onmouseup=function(){
	var texto=window.getSelection().toString();
	console.log(texto);
}