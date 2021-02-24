/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var seguir = true;
	var numero;
	var numeroParse;
	var positivos = 0;
	var negativos = 1;
	var flag = 0;

	do
	{
		numero = prompt ("Ingresar un numero");
		numeroParse = parseInt (numero);

		if (numero >= 0)
		{
			positivos = positivos + numeroParse;
		}
		else
		{	
			flag = 1;
			negativos = negativos * numeroParse;
		}

		seguir = confirm ("¿Continuar ingresando?");

	}while (seguir);

	if (flag == 0)
	{
		negativos = 0;
	}
	document.getElementById("txtIdProducto").value = negativos;
	document.getElementById("txtIdSuma").value = positivos;
}