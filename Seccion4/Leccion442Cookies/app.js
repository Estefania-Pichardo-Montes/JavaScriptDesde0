function crearCookie(nombre,valor) {

	valor= escape(valor);

    //Aqui le ponemos fecha de vencimiento a la cookie
	var hoy= new Date();
	hoy.setMonth(hoy.getMonth()+1);

	document.cookie= nombre + "="+ valor + ";expires="+
	hoy.UTCString()+";";

}

function borrarCookie(nombre){
	var hoy= new Date();
	hoy.setMonth(hoy.getMonth()-1);

	document.cookie= nombre + "="+ valor + ";expires="+
	hoy.UTCString()+";";

}

crearCookie("nombre","Estefania");
crearCookie("correo","fanny:pichardo23@hotmail.com");
crearCookie("direccion","México");

borrarCookie("nombre");

function getCookie(nombre){

	var cookies = document.cookie;

	var cookiesArr=cookies.split(";");
	console.lo(cookiesArr);

	for(var i=0; i<cookiesArr.length; i++){

		var parArr=cookieArr[i].split("=");
		cookieArr[i]=parArr;

		if(parArr[0]===nombre){
			return unescape(parArr[1]);
		}
	}

	return undefined;
}

console.log(getCookie("correo"));

//Ejemplo de lo que hace escape y unescape
// var demo="123;123*123'123/123";
// console.log(demo);
// console.log(escape(demo));
// console.log(unescape(escape(demo));


// Leer las cookies
// var cookies = document.cookie;
// console.log( cookies );

