setTimeout(function(){
console.log("Paso un segundo");

},1000);

var segundos=0;
var intervalo = setInterval(function(){
	segundos++;

	console.log("seg",segundos);

	if(segundos==3){
		clearInterval(intervalo);
	}

},1000);

var estefania={
	nombre:"Estefania",
	edad:21,
	imprimir:function(){
		var self=this;
		setTimeout(function(){
			console.log(this);//Aqui apunta al objeto global
			console.log(self.nombre,self.edad);//Añadimos el self para que apunte a nuestro objeto
		},1000);
		
	}
}

estefania.imprimir();