function mostrar()
{
	var numero;

	for (; ;) // Una forma de armar un bucle infinito con for
	{	
		numero = parseInt (prompt ("Ingresar un número"));
		if (numero == 9)
		{
			break;
		}
	}
}