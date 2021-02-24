function mostrar()
{
	var edad;
	var edadParse;

	edad = document.getElementById("txtIdEdad").value;

	edadParse = parseInt(edad);

	if(!(edadParse >= 13 && edadParse <= 17))
	{
		alert("No es adolescente");

	}

	/*if(edadParse <= 12 || edadParse >= 18)
	{
		alert("No es adolescente");

	}*/
	
		
}