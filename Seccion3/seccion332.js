var fecha= new Date(2020,9,7);
console.log(fecha);

// fecha.setDate(15);
// console.log(fecha);

Date.prototype.sumarDias=function(dias) {
	this.setDate(this.getDate()+dias);
	return this;
}

console.log(fecha.sumarDias(5));

Date.prototype.sumarAnios=function(anios) {
	this.setFullYear(this.getFullYear()+anios);
	return this;
}

console.log(fecha.sumarAnios(-25));
