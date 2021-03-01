function mostrar()
{

	/*var miArray = new Array();

	for (var i = 0; i <5; i++)
	{
		miArray[i]=parseInt(prompt("Ingrese un numero"));
	}



	for(var i=0; i<5; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
	}*/

	var ArrayNumeros = [];
	var numero;

	for (i = 0 ; i < 150 ; i++)
	{
		numero = parseInt (prompt ("Ingresar números"));
		ArrayNumeros.push (numero);
		if (i == 3)
		{
			break;
		}	
	}
	for (i = 0 ; i < 4 ; i++)
	{
		document.write (ArrayNumeros[i]);
	}
	





}