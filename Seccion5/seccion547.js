console.log("====Ciclo While======")
var i=0;

while(i<=10){
	
	if(i===5){
		break;
	}

	// if(i===5){
	// 	continue;
	// }

	console.log(i);

	i++;
}
console.log("====Aqui empieza el ciclo doWhile======")

var j=0;

do{
	j++;
	if(j===5){
		continue;
	}
	console.log(j);
	

}while(j<10);


