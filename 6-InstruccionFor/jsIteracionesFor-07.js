function mostrar()
{
	var cantidadRepeticiones;
	var contadorDivisores = 0;

	cantidadRepeticiones = prompt ("Ingresar cantidad de iteraciones");
	cantidadRepeticiones = parseInt (cantidadRepeticiones);

	for (i = 1 ; i <= cantidadRepeticiones ; i++)
	{
		if (cantidadRepeticiones % i == 0)
		{
			alert (i);
			contadorDivisores++;
		}
	}
	alert ("La cantidad de números divisores es de: "+contadorDivisores);
}