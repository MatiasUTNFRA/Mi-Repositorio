function mostrar()
{
	var edad;
	var edadParse;

	edad = document.getElementById("txtIdEdad").value;

	edadParse = parseInt(edad);

	if(edadParse >= 13)
	{
		if(edadParse <= 17)
		{
			alert("Es adolescente");
		}
	}
	/*solucion alternativa usando operador logico: "and"
	if(edadParse >= 13 && edadParse <= 17)
	{
		alert("Es adolescente");

	}*/
	/*solucion alternativa usando operador logico: "not"
	if(!(edadParse <= 12 || edadParse >= 18))
	{
		alert("Es adolescente");

	}*/

}