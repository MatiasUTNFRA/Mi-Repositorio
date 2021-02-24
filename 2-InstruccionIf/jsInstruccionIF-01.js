function mostrar()
{
	var edad;
	var edadParse;

	edad =  document.getElementById ("txtIdEdad").value;
	edadParse = parseInt (edad);

	if (edadParse == 15)
	{
		alert ("Niña bonita");
	}
}