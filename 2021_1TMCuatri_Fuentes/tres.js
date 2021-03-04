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
	var sumaPrecio = 0;
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
		
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo" || isNaN (estadoCivil) == false)
		{
			estadoCivil = prompt ('Inválido. Reingresar: ("soltero", "casado", "viudo")');
		}
		edad = prompt ("Ingresar la edad");
		edadParse = parseInt (edad);

		while (edadParse <= 0 || edadParse > 100 || isNaN (edadParse) == true)
		{
			edadParse = parseInt (prompt ("Inválido. Reingresar:"));
		}
		temperatura = prompt ("Ingresar la temperatura corporal");
		temperaturaParse = parseInt (temperatura);

		while (temperaturaParse < 35 || temperaturaParse > 45 || isNaN (temperaturaParse) == true)
		{
			temperaturaParse = parseInt (prompt ("Temperatura inválida. Reingresar:"));
		}
		sexo = prompt ('Ingresar el sexo ("masculino", "femenino")');

		while (sexo != "femenino" && sexo != "masculino" || isNaN (sexo) == false)
		{
			sexo = prompt ("Inválido. Reingresar:");
		}
		switch (estadoCivil)
		{
			case "casado":

			break;
			case "soltero":
				if (sexo == "femenino")
				{
					if (contadorMujerJoven == 0 || edadParse < EdadMujerJoven)
					{
						EdadMujerJoven = edadParse;
						nombreMujerJoven = nombre;
					}
				}
			break;
			case "viudo":
				if (edadParse >= 60)
				{
					contadorViudo ++;
				}
			break;

		}
		sumaPrecio += precioPasajero;
		if (edadParse >= 60)
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

	if (contadorMas60 > contadorPasajeros)
	{
		descuento = 25;
		precioConDescuento = sumaPrecio - sumaPrecio * descuento / 100;
		document.write ("Se ha aplicado un descuento del 25% dejando el valor total en: "+precioConDescuento+"<br>");
	}
	document.write ("a) La cantidad de personas con estado viudo es de: "+contadorViudo+
	"<br>b) Nombre de la soltera más joven: "+nombreMujerJoven+", edad: "+EdadMujerJoven+
	"<br>c) El viaje total sin descuento es de: $"+sumaPrecio);


}
