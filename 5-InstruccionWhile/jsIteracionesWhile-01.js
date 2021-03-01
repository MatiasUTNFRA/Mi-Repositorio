/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	/*var numero = 1; // Declaracion e inicializacion de la variable de control

	while (numero <= 10) // Condicion de la variable de control
	{
		alert("Iteración while: "+numero);
		numero = numero + 1; // Modificacion de la variable de control (utiliza un contador en este caso)
	//  numero ++ --> Forma alternativa de poner la suma anterior
	}*/

	var numeros = [];
	var numeroIngresado;
	var maximo;
	var minimo;
	var suma = 0;
	var promedio;
	seguir = true;
	numeros = parseInt (numeros);
	do
	{	
		numeroIngresado = parseInt (prompt ("Ingresar un nùmero"));
		console.log (numeroIngresado);
		numeros.push = (numeroIngresado);
		console.log (numeros [0]);
		seguir = confirm ("¿Desea continuar?");

	}while (seguir);

	
	for (var i = 0 ; i < numeros.length ; i++)
	{
		if (numeros [i] > maximo)
		{
			maximo = numeros [i];
		}
	}
	alert ("El nùmero màximo es: "+maximo);

	for (var i = 0 ; i < numeros.length ; i++)
	{
		suma += numeros [i];
	}
	promedio = suma / numeros.length;
	alert ("El promedio es: "+promedio);


}
