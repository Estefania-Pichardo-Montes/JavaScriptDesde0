
var b="Pichardo";
var a = new String("Estefania Pichardo Montes");

console.log(a);
console.log(a.toUpperCase());
console.log(a.toLowerCase());

var i= a.indexOf("Pichardo");
console.log("La letra esta en la posicion: " + i);

var i= a.lastIndexOf("e");
console.log("La letra esta en la posicion: " + i);

var nombre= a.substr(0, a.indexOf(" "));
console.log(nombre);

var separar = a.split(" ");
console.log(separar);
console.log(separar.length);

//-------------------------

document.write(a.italics());