/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numero;
	var numeroParse;
	var contador = 0;
	var acumulador = 0;
	var seguir = true;
	var promedio;

	do
	{
		numero = prompt ("Ingresar un número");
		numeroParse = parseInt (numero);
		acumulador = acumulador + numeroParse;
		contador = contador + 1;
		seguir = confirm ("¿Continuar ingresando?");
	}while (seguir);
		
	promedio = acumulador / contador;
	document.getElementById ("txtIdSuma").value = acumulador;
	document.getElementById ("txtIdPromedio").value = promedio;
}