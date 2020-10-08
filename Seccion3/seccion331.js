var hoy= new Date();
console.log(hoy);

var fechaMilisegundos= new Date(1);
console.log(fechaMilisegundos);

var fechaFija= new Date(2020, 9, 10, 23,10,22);
console.log(fechaFija);

console.log(hoy.getFullYear());

var inicio= new Date();
for (var i = 0; i < 3500; i++) {
	console.log("Algo...");
}
var fin= new Date();

console.log(inicio);
console.log(fin);

var duracion=fin.getTime()-inicio.getTime();
console.log(duracion, "milisegundos");

var duracionSegundos=(fin.getTime()-inicio.getTime())/1000;
console.log(duracionSegundos, "segundos");