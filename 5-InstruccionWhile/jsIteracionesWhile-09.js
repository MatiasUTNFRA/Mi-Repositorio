/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var seguir = true;
	var numero;
	var numeroParse;
	var maximo;
	var minimo;
	var contador = 0;

	do
	{
		numero = prompt ("Ingresar un número");
		numeroParse = parseInt (numero);

		if (contador == 0)
		{
			maximo = numeroParse;
			minimo = numeroParse;
			contador = contador + 1;
		}
		else
		{
			if (numeroParse > maximo)
			{
				maximo = numeroParse;
			}
			else
			{
				if (numeroParse < minimo)
				{
					minimo = numeroParse;
				}
			}
		}		
			
		seguir = confirm ("¿Continuar ingresando?");
	}while (seguir);

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
}