function mostrar()
{
	var edad;
	var edadParse;

	edad = document.getElementById("txtIdEdad").value;

	edadParse = parseInt(edad);

	if (edadParse >= 18)
	{
		alert("Mayor de edad");
	}
	else
	{
		if(edadParse >= 13 && edadParse <= 17)
		{
			alert("Adolescente");
		}
		else
		{
			alert("Menor de edad");
		}

	}

	/* Utilizando "else if" para simplificar la estructura

	if(edadParse >= 18)
	{
		alert("Mayor de edad");
	}
		else if(edadParse >= 13 && edadParse <= 17)
		{
			alert("Adolescente");

		}
	else 
	{
		alert("Menor de edad");
	}*/


}