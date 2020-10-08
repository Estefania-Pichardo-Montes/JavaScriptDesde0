var a= true;
var b= false;

var c= new Boolean(5);
console.log(c);

var d= new Boolean();

console.log(d.valueOf());

if(d.valueOf()){
	console.log("Me imprimi!")
}