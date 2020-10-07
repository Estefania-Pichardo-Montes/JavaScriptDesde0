function Persona(nombre, apellido) {
	this.nombre=nombre;
	this.apellido=apellido;
	this.edad=30;

	// console.log("Paso por aqui");

	this.imprimirPersona= function(){
		return this.nombre+" "+this.apellido;
	}

}


var juan= new Persona("Estefania","Pichardo");

console.log(juan);
console.log(juan.nombre);
console.log(juan.imprimirPersona());