function Persona(){
	this.nombre="Estefania";
	this.apellido="Pichardo";
	this.edad=21;
	this.pais="Mexico";
}
Persona.prototype.imprimirInfo=function(){
console.log(this.nombre + " "+this.apellido +" ("+this.edad+")");

}

var fanny= new Persona();
console.log(fanny);
console.log(fanny.pais);

var a ="Estefania"

Number.prototype.esPositivo=function(){

	if(this>0){
		return true;
	} 
	else{
		return false;
	}
}