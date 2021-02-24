
function mostrar()
{
	var i;
	var iParse;
	var contadorPares = 0;
	var seguir = "Si";

	while (seguir == "Si")
	{
		i = prompt ("Ingresar número");
		iParse = parseInt (i);

		if (iParse % 2 == 0)
		{
			contadorPares = contadorPares + 1;
		}
		seguir = prompt ("Continuar?");
	}
	alert (contadorPares);
}