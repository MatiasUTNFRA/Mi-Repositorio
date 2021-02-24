function mostrar()
{
	var numero;
	var numeroParse;
	var acumulador = 0;
	var promedio;
	var i = 0;

	while (i < 5)
	{
		numero = prompt ("Ingresar un número");
		numeroParse = parseInt (numero);

		acumulador = acumulador + numeroParse; // Se utiliza el acumulador para ir sumando los numeros ingresados
		i = i + 1; // Se utiliza el contador para poder salir del bucle cuando se cumpla la condicion
	}
	
	promedio = acumulador / 5;
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

	/*Metodo sin utilizar while
	var numero1;
	var numero2;
	var numero3;
	var numero4;
	var numero5;
	var suma;
	var promedio;

	numero1 = prompt ("Ingresar el primer número");
	numero2 = prompt ("Ingresar el segundo número");
	numero3 = prompt ("Ingresar el tercer número");
	numero4 = prompt ("Ingresar el cuarto número");
	numero5 = prompt ("Ingresar el quinto número");

	numero1 = parseInt (numero1);
	numero2 = parseInt (numero2);
	numero3 = parseInt (numero3);
	numero4 = parseInt (numero4);
	numero5 = parseInt (numero5);

	suma = numero1 + numero2 + numero3 + numero4 + numero5;
	promedio = suma / 5;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;*/

}