//Esta es una funcion anonima mas encapsulada 
//para evitar que la variable 'a' este en eñ objeto global

( function(){

var a =10;

console.log(a);

function CambiarA() {
	a=20
}
CambiarA();

console.log(a);

})
();

//Otro tipo de funciones anonimas

function ejecutarFuncion(fn){
	fn();

	if(fn()===1){
		return true;
	}
	else{
		return false;
	}
}

console.log(
	ejecutarFuncion( function(){
		console.log("Funcion anonima ejecutada");
		return 0;
	})
);
