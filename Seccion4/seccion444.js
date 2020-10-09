var nota=96;

if(nota>=90){
	console.log("A");
}
else if(nota>=80){
	console.log("B");
}
else if(nota>=70){
	console.log("C");
}
else if(nota>=60){
	console.log("D");
}
else{

	if(nota>50){
		console.log("-F");

	}
	else{

	console.log("Algo por aqui");
	}

	

}

var a=10;
var b=20;
var c=(a>b)?a:b;
console.log(c);

/*var c=(a>b)?function(){
	console.log("A es mayor a B");
	return a;
}()
:
 function(){
	console.log("B es mayor a A");
	return b;
}();*/

/*if(a>b)
{
	c=a;
}
else{
	c=b;
}*/

var d=undefined;
var e=10;
var f= d||e;

console.log(f);

function getNombre(nombre){
	var nomb=nombre||"<Sin nombre>"||"<Sin apellido>";

	console.log(nomb);
}
getNombre();

console.log("Termino el codigo");