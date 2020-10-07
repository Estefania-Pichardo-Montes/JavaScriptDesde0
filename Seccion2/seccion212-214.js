// var a=30;
//Declaramos la funcion
// function primeraFuncion(){
// 	var a=20;
// 	console.log(a);
// }

// //Aqui invocamos a la funcion
// primeraFuncion();

// //Al hacer esto obtengo la definicion completa del objeto
// var miFuncion=primeraFuncion;

// function imprimir(fn)
// {
// 	// apellido=apellido||"xxxx";

// 	// if(apellido===undefined)
// 	// {
// 	// 	apellido="xxxx";
// 	// }

// 	// console.log(nombre + " " +apellido);

// 	// console.log(persona);
// 	fn();
// }
// var persona={
// 	nombre:"Juan",
// 	apellido:"Padilla"
// }

// var miFuncion=function()
// {
// 	console.log("Mi funcion");
// }
// imprimir(miFuncion);

function obtenerAleatorio()
{
	return Math.random();
}

console.log(obtenerAleatorio());

function obtenerNombre()
{
	return "Juan";
}
console.log(obtenerNombre()+ " " + "Padilla");

function esMayor05(){

	if(obtenerAleatorio()>0.5)
	{
		return true;
	}
	else{
			return false;
	}
}

if(esMayor05())
{
	console.log("Es mayor a 0.5");

}
else{
	console.log("Es menor a 0.5");
}
console.log(esMayor05());

function crearPersona(nombre, apellido){
 	return{
 		nombre:nombre,
 		apellido:apellido

	};

}

var persona = crearPersona("Estefania","Pichardo");
console.log(persona.nombre);

function crearFuncion(){
	return function(nombre){
		console.log("Me creo " + nombre);

		return function(){
			console.log("Segunda funcion");
		}
	}
}
var nuevaFuncion=crearFuncion();
var SegundaFuncion= nuevaFuncion(persona.nombre);

SegundaFuncion();