function mostrar()
{
	var estadocivil;
	var edad;
	var edadParse;

	estadocivil = document.getElementById("estadoCivil").value;
	edad = document.getElementById("txtIdEdad").value;

	edadParse = parseInt(edad);

	if(edadParse <= 17 && estadocivil != "Soltero")
	{
		alert("Es muy pequeño para no ser soltero");

	}
	
	document.getElementById("txtIdEdad").value = ""

}