//Comentario de linea

/*
Comentario multiliena
comentario miltilinea
*/

var arr=["Estefania",
	{
  //La primera linea hace...

  //Esto hace un objeto...
  //Esta propiedad ahce....
  //por lo cual...	
		nombre:"Estefania",
		apellido:"Pichardo",

		getNombre:function () 
		{
			return this.nombre + " " +this.apellido;
		}
	},
	 
	true, 

	function()
	{
		console.log(this);
	}	

];

console.log(arr);