function identifica(param) {
	console.log(typeof param);

	// if (typeof param=="function") {
	// 	param();
	// }
	// else{
	// 	console.log(param);
	// }
	
	console.log(param instanceof persona);
}

function persona(){
 this.nombre="Estefania";
 this.edad=21;
}

var Estefania= new persona(); 

identifica(Estefania);