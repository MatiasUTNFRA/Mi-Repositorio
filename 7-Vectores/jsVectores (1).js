function mostrar()
{

	/*var miArray = new Array();

	miArray[0]=5;
	miArray[1]=74;
	miArray[2]=8;
	miArray[3]=94;
	miArray[4]=5;
	miArray[5]=0;
	miArray[6]=80;
	miArray[7]=789;
	miArray[8]=5;
	miArray[9]=7;

document.write("El contenido del vector es: <br>");

	for(var i=0; i<10; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
	}*/

	var ArrayNumero = [5,10,15,20,25,30,35,40,45,50];

	for (i = 0 ; i < 10 ; i++)
	{
		alert (ArrayNumero [i]);
	}

	/*var numeros = [];
	var numeroIngresado;
	var seguir = true;
	var maximo;
	var minimo;
	var suma = 0;
	var promedio;
	

	do
	{
		numeroIngresado = parseInt (prompt ("Ingresar un número"));
		numeros.push (numeroIngresado);
		seguir = confirm ("¿Continuar?");
	}while (seguir);

	minimo = numeros [0];
	for (var i = 0 ; i < numeros.length ; i++)
	{
		if (numeros [i] < minimo)
		{
			minimo = numeros [i];
		}
	}
	alert ("El número mínimo es: "+minimo);

	maximo = numeros [0];
	for (var i = 0 ; i < numeros.length ; i++)
	{
		if (numeros [i] > maximo)
		{
			maximo = numeros [i];
		}
	}
	alert ("El número máximo es: "+maximo);

	for (var i = 0 ; i < numeros.length ; i++)
	{
		suma += numeros [i];
	}
	promedio = suma / numeros.length;
	alert ("El promedio es: "+promedio);*/
}