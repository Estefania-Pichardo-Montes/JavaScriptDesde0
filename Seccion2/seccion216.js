var persona={
	nombre:"Estefania",
	apellido:"Pichardo",

	imprimirNombre:function () {
		console.log(this.nombre +" "+this.apellido);
	},
	direccion:{
		pais:"Mexico",
		obtenerPais:function(){
		var self=this;

		var nuevaDireccion=function(){
			console.log(self);
			console.log("La direccion es en " + self.pais);
			}
			nuevaDireccion();
		}
	}
}
// persona.nombre="Michelle";
persona.imprimirNombre();
persona.direccion.obtenerPais();