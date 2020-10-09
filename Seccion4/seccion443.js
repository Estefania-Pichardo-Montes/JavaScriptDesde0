var carro={
	color:"blanco",
	marca:"Mazda",
	imprimir:function () {
		var salida =this.marca + "-"+this.color;
		return salida;
	}
}
var carro2={
	color:"Rojo",
	marca:"toyota"
}

console.log(carro.imprimir());

var logCarro=function(arg1,arg2){
	console.log("Carro:",this.imprimir());
	console.log("Argumentos", arg1,arg2);
	console.log("==================");
}

var logModeloCarro=logCarro.bind(carro);

logModeloCarro("abc", "xyz");

logModeloCarro.call(carro, "123","456");

logModeloCarro.apply(carro, ["123","456"]);

//Funciones prestadas

console.log(carro.imprimir.call(carro2));
