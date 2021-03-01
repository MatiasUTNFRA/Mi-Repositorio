function mostrar()
{
	var CantidadRepeticiones;
	var contadorPares = 0;

	CantidadRepeticiones = prompt ("Ingresar las iteraciones");
	CantidadRepeticiones = parseInt (CantidadRepeticiones);

	for (i = 1 ; i <= CantidadRepeticiones ; i++)
	{
		if (i % 2 == 0)
		{
			alert (i);
			contadorPares++;
		}
	}
	alert ("Cantidad de números pares: "+contadorPares);
}