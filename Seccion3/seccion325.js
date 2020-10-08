function crearProducto(nombre, precio) {
	nombre=nombre||"Sin nombre";
	precio=precio||0;
	console.log("Producto: ", nombre, "Precio: ", precio);
}

crearProducto("Lapiz",5);

function crearProducto100(nombre){
	crearProducto(nombre,100);
}

crearProducto100("Corrector");

function crearProductoCamisa(precio){
	crearProducto("Camisa",precio);
}
crearProductoCamisa(150);