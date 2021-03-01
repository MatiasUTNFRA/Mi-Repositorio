/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexo;

	while (sexo != "f" && sexo != "m")
	{
		sexo = prompt ("Ingresar sexo");
		if (sexo != "f" && sexo != "m")
		{
			alert ("No es un sexo válido");
		}
	}

	document.getElementById("txtIdSexo").value = sexo;
}