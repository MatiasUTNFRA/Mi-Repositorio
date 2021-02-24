/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var numero = 1; // Declaracion e inicializacion de la variable de control

	while (numero <= 10) // Condicion de la variable de control
	{
		alert("Iteración while: "+numero);
		numero = numero + 1; // Modificacion de la variable de control (utiliza un contador en este caso)
	//  numero ++ --> Forma alternativa de poner la suma anterior
	}
}
