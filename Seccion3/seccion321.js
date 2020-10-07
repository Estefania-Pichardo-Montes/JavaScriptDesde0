var arr=[
	true,
	false,
	{
		nombre:"Estefania",
		apellido:"Pichardo"
	},
	function(){
		console.log("Soy una funcion y Estoy viviendo en un arreglo");
	},
	function(persona){
		console.log(persona.nombre+" "+persona.apellido);
	},
	[
	"Estefania","Saul","Nayla","Esme",
		[
			"Sebas",
			"Tingo",
			"Juany",

			function(){
				console.log(this);
			}
		]
	],
	true
];

console.log(arr);
console.log(arr[0]);
console.log(arr[2].nombre +" "+ arr[2].apellido);

arr[3]();
arr[4](arr[2]);

console.log(arr[5][4][1]);

var arreglo2= arr[5][4];

arreglo2[1]="Roberto";
console.log(arreglo2);
console.log(arr);

arreglo2[3]();