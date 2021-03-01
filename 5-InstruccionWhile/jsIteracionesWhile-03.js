/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var clave;

	while (clave != "utn750")
	{
		clave = prompt ("Por favor ingresar la clave");
		if (clave != "utn750")
		{
			alert ("Clave incorrecta");
		}
	}
	alert ("Clave correcta");
}
