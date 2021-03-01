/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numero = 10;

	while (numero < 0 || numero > 9)
	{
		numero = parseInt (prompt ("Ingresar un número entre 0 y 9 inclusive"));
		console.log (numero);
		
		if (numero < 0 || numero > 9)
		{
			alert ("No es un número que esté dentro del rango");
		}
	}
	document.getElementById ("txtIdNumero").value = numero;
}