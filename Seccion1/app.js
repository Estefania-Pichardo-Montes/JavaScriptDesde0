// var a =1;
// var b="Estefania"
// console.log(a);
// console.warn(a);
// console.error(a);
// console.info(a);
// console.log(a+a);

// var a="Estefania";
// var b=3;
// var c=true;
// console.log(a);
// console.log(b);
// console.log(c);

// function imprimir(){
// 	for (var i = 0; i < 8000; i++){

// 		console.log("Imprimio");

// 	}
// }

// function presionoClick()
// {
// 	console.log("Click en boton");
// }
// imprimir();

// var nombre="Estefania";


// var  numero=10;
// var str="texto";
// var bol=true;
// var und= undefined
// var nul=null;

// console.log(numero);

// var obj={
// 	numero:10,
// 	texto="Nuevo texto"

// 	objHijo{
// 		numero2:20,
// 		texto2:"Nuevo texto2"

// 	}
// };
// console.log(obj);

// var a=10;
// var b=a;

// console.log("a:",a);
// console.log("b:",b);

// var c={
// 	nombre:"Juana"
// }
// var d=c;

// console.log("c:",c);
// console.log("d:",d);

// c.nombre="Maria";

// console.log("c:",c);
// console.log("d:",d);

// d.nombre="Pedro"

// console.log("c:",c);
// console.log("d:",d);

var persona= {
	nombre:"Estefania",
	apellido:"Pichardo",
	edad:21,

	direccion:{
		pais:"Mexico",
		ciudad:"Sabinas",
		estado:"Coahuila",

		edificio:{
			nombre:"Edificio principal",
			telefono:"86145625"
		}
	}
}

// console.log(persona.direccion.pais);
// console.log(persona.direccion);

// persona.direccion.zipcode=11101;

// console.log(persona.direccion.zipcode);

// console.log(persona.direccion.edificio.telefono);

// var edificio=persona.direccion.edificio;

// edificio.numPiso="8vo piso";

// console.log(persona);

var campo="edad";
console.log(persona["campo"]);