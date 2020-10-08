// var reg1= RegExp("a");

//i = insensible
//g= todas las apariciones
//m=multilinea

var reg2=/a/;

var texto="Holaa Mundoooooo. Hoola de nuevooo";
console.log(texto);

var arr= texto.match(/o{2,3}/g);

console.log(arr);

var texto2="La respuesta de la suma es: 45 + 60 = 105";
console.log(texto2);
var arr2= texto2.match(/\d{1,}|respuesta/g);
console.log(arr2);

