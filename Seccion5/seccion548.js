
console.log("====Ciclo For======");
for (var i = 0; i < 10; i++) {

	if(i==5)
	{
		continue;
	}
	if(i==8)
	{
		break;
	}
	console.log(i);
};

console.log("====Ciclo For in======");

var Persona=function(){
	this.nombre="Estefania";
	this.apellido="Pichardo";
	this.edad=21;
};

var p = new Persona();

Persona.prototype.direccion = "Mexico";

for(propiedad in p)
{
	//Esto se conoce como reflejo, para evaluarlos en si mismos.
	if (!p.hasOwnProperty(propiedad))
		continue;

	console.log(propiedad,":", p[propiedad]);
}

for(num in [1,2,3,4,5,6,7,8,9,10])
{
	console.log(num);
	//Lo que regresa esto es el index  y no el valor del numero
}
console.log("====Ciclo forEach======");
[1,2,3,4,5,6,7,8,9,10].forEach(function(val){
	console.log(val);
});
