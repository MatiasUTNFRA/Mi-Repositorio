function mostrar()
{

	/*var miArray = new Array();
	var acum=0;
	for (var i = 0; i <5; i++)
	{
		miArray[i]=parseInt(prompt("Ingrese un numero"));
		acum+=miArray[i];

	}



	for(var i=0; i<5; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");


	}

	document.write("<h1> La suma de todos los numeros es: "+acum+"</h1>")*/

	var ArrayNumeros = [];
	var numero;
	var acumulador = 0;
	seguir = true;

	do
	{
		numero = parseInt (prompt ("Ingresar números"));
		ArrayNumeros.push (numero);
		acumulador = acumulador + numero;
		seguir = confirm ("¿Seguir ingresando?");

	}while (seguir);

	document.write ("Números ingresados: "+ArrayNumeros);
	document.write ("<br>");
	document.write ("Suma de los mismos: "+acumulador);
	

	


}