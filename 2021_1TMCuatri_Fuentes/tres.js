function mostrar()
{	
	var seguir = true;
	var nombre;
	var estadoCivil;
	var edad;
	var edadParse;
	var temperatura;
	var temperaturaParse;
	var sexo;
	var contadorViudo = 0;
	var nombreMujerJoven;
	var EdadMujerJoven;
	var contadorMujerJoven = 0;
	var precioPasajero = 600;
	var descuento;
	var precioSinDescuento;
	var precioConDescuento;
	var contadorMas60 = 0;
	var contadorPasajeros = 0;

	do
	{
		nombre = prompt ("Ingresar nombre");

		while (isNaN (nombre) == false)
		{
			nombre = prompt ("Nombre inválido. Reingresar");
		}
		estadoCivil = prompt ('Ingresar el estado civil ("soltero", "casado", "viudo")');
		
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt ('Inválido. Reingresar: ("soltero", "casado", "viudo")');
		}
		edad = prompt ("Ingresar la edad");
		edadParse = parseInt (edad);

		while (isNaN (edadParse) || edadParse <= 0 || edadParse > 100)
		{
			edadParse = parseInt (prompt ("Inválido. Reingresar:"));
		}
		temperatura = prompt ("Ingresar la temperatura corporal");
		temperaturaParse = parseInt (temperatura);

		while (isNaN (temperaturaParse) || temperaturaParse < 35 || temperaturaParse > 45)
		{
			temperaturaParse = parseInt (prompt ("Temperatura inválida. Reingresar:"));
		}
		sexo = prompt ('Ingresar el sexo ("masculino", "femenino")');

		while (sexo != "femenino" && sexo != "masculino")
		{
			sexo = prompt ("Inválido. Reingresar:");
		}
		switch (estadoCivil)
		{
			case "soltero":
				if (sexo == "femenino")
				{
					if (contadorMujerJoven == 0 || edadParse < EdadMujerJoven)
					{
						EdadMujerJoven = edadParse;
						nombreMujerJoven = nombre;
						contadorMujerJoven = 1;
					}
				}
			break;
			case "viudo":
				if (edadParse > 60)
				{
					contadorViudo ++;
				}
			break;
		}
		if (edadParse > 60)
		{
			contadorMas60 ++;
		}
		contadorPasajeros ++;

		seguir = confirm ("¿Continuar ingresando?");

	}while (seguir);

	if (contadorMujerJoven == 0)
	{
		EdadMujerJoven = 0;
		nombreMujerJoven = "Ninguno";
	}
	precioSinDescuento = precioPasajero * contadorPasajeros;

	if (contadorMas60 > contadorPasajeros / 2)
	{
		descuento = 25;
		precioConDescuento = precioSinDescuento - precioSinDescuento * descuento / 100;
		document.write ("d) Se ha aplicado un descuento del 25% dejando el valor total en: $"+precioConDescuento+"<br>");
	}
	document.write ("a) La cantidad de personas con estado viudo es de: "+contadorViudo);
	document.write ("<br>b) Nombre de la soltera más joven: "+nombreMujerJoven+", edad: "+EdadMujerJoven);
	document.write ("<br>c) El viaje total sin descuento es de: $"+precioSinDescuento);
}
