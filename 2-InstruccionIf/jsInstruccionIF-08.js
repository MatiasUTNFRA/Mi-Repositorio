function mostrar()
{
	var estadocivil;
	var edad;
	var edadParse;

	estadocivil = document.getElementById("estadoCivil").value;
	edad = document.getElementById("txtIdEdad").value;

	edadParse = parseInt(edad);

	if(edad >= 18 && estadocivil == "Soltero")
	{
		alert("Es soltero y no es menor");
	}
	
	document.getElementById("txtIdEdad").value = ""

}