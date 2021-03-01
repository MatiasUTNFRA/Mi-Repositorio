function mostrar()
{
	var numero;
	var contadorDivisores = 0;
	
	while (isNaN(numero)) // Validamos con isNaN si lo que ingreso el usuario no sea de otro tipo distinto a number
	{
		numero = parseInt (prompt ("Ingresar un número"));
		if (isNaN(numero))
		{
			alert ("Eso no es número");
		}
	}

	for (i = 0 ; i <= numero ; i++)
	{
		if (numero % i == 0)
		{	
			contadorDivisores++;
		}
	}
	if (contadorDivisores == 2)
	{
		alert (+numero+" es primo");
	}
	else
	{
		alert (+numero+" no es primo");
	}
}