/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	var numero;
	var numeroParse;
	var seguir;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var contadorNegativos = 0;
	var contadorPositivos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var flag = 0;

	do
	{
		numero = prompt ("Ingresar un número");
		numeroParse = parseInt (numero);

		if (numeroParse < 0)
		{
			sumaNegativos = sumaNegativos + numeroParse;
			contadorNegativos = contadorNegativos + 1;
			flag = 1;
		}
		else
		{
			if (numeroParse > 0)
			{
				sumaPositivos = sumaPositivos + numeroParse;
				contadorPositivos = contadorPositivos + 1;
				flag = 1;		
			}
			else
			{
				if (numeroParse == 0)
				{
					contadorCeros = contadorCeros + 1;
				}			
			}		
		}
		if (numeroParse % 2 == 0)
		{
			contadorPares = contadorPares + 1;
		}
		seguir = prompt ("¿Desea continuar? Ingresar (Si) en caso de continuar, de lo contrario ingresar cualquier otra cosa");
	}while (seguir == "Si");
	promedioPositivos = sumaPositivos / contadorPositivos;
	promedioNegativos = sumaNegativos / contadorNegativos;
	diferencia = sumaPositivos + sumaNegativos;

	if (flag == 0)
	{
		promedioPositivos = 0;
		promedioNegativos = 0;
	}

	alert ("La suma de los negativos es de: "+sumaNegativos);
	alert ("La suma de los positivos es de: "+sumaPositivos);
	alert ("La cantidad de números negativos es de: "+contadorNegativos);
	alert ("La cantidad de números positivos es de: "+contadorPositivos);
	alert ("La cantidad de ceros es de: "+contadorCeros);
	alert ("La cantidad de números pares es de: "+contadorPares);
	alert ("El promedio de los números positivos es de: "+promedioPositivos);
	alert ("El promedio de los números negativos es de: "+promedioNegativos);
	alert ("La resta entre los números positivos y los números negativos es de: "+diferencia);
}