function evento(arg){
	console.log("Me dispare");
	console.log(arg);
}

var objeto=document.getElementById("ObjDem o");
console.log(objeto);
objeto.addEventListener("keypress",evento);

var objeto2=document.getElementById("objeto2");
objeto2.addEventListener("click",evento);

objeto2.click();

