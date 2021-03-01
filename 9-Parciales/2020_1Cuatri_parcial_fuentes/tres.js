function mostrar()
{
	var nombre;
	var edad;
	var edadParse;
	var sexo;
	var estadoCivil;
	var temperatura;
	var temperaturaParse;
	var seguir = true;
	var mayorTemperatura;
	var nombreMayorTemperatura;
	var flag = 0;
	var flag2 = 0;
	var contadorSolteros = 0;
	var contadorViudos = 0;
	var contadorMayores = 0;
	var contadorMayoresTemperatura = 0;
	var acumuladorSolteros = 0;
	var promedioSolteros;
	
	do
	{	
		nombre = prompt ("ingresar nombre");

		while (nombre == "")
		{
			nombre = prompt ("No es un nombre. Reingresar:");
		}
		edad = prompt ("Ingresar la edad");
		edadParse = parseInt (edad);

		while (edadParse <= 0 || isNaN (edadParse))
		{
			edadParse = parseInt (prompt ("No es una edad válida. Reingresar:"));
		}
		sexo = prompt ('Ingresar el sexo ("f" o "m")');

		while (sexo != "f" && sexo != "m")
		{
			sexo = prompt ('No es un sexo válido. Debe ser "f" o "m"');
		}
		estadoCivil = prompt ('Ingresar el estado civil ("soltero", "casado" o "viudo")');

		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt ('Estado civil inválido. Debe ser "soltero", "casado" o "viudo"' );
		}
		temperatura = prompt ("Ingresar la temperatura corporal");
		temperaturaParse = parseInt (temperatura);

		while (temperaturaParse < 35 || temperaturaParse > 45 || isNaN (temperaturaParse))
		{
			temperaturaParse = parseInt (prompt ("No es una temperatura válida. Reingresar:"));
			
		}
		if (flag == 0 || temperaturaParse > mayorTemperatura)
		{
			mayorTemperatura = temperaturaParse;
			nombreMayorTemperatura = nombre;
			flag = 1;
		}
		switch (estadoCivil)
		{
			case "soltero":

				if (sexo == "m")
				{	
					contadorSolteros++;
					acumuladorSolteros += edadParse;
					flag2 = 1;
				}
				
			break;

			case "viudo":

				if (edadParse >= 60)
				{
					contadorMayores++;
				}
				if (sexo == "m")
				{
					contadorViudos++;
				}
			break;			
		}
		if (edadParse >= 60 && temperaturaParse >= 38)
		{
			contadorMayoresTemperatura++;
		}
		seguir = confirm ("¿Conitnuar agregando?");

	}while (seguir);

	if (flag2 == 1)
	{
		promedioSolteros = acumuladorSolteros / contadorSolteros;
	}
	else
	{
		promedioSolteros = 0;
	}
	
	document.write ("a) El nombre de la persona con mayor temperatura es: "+nombreMayorTemperatura+", con una temperatura de: "+mayorTemperatura+"º"+
	"<br>b) La cantidad de mayores de edad viudos es de: "+contadorMayores+
	"<br>c) .La cantidad de hombres solteros es de : "+contadorSolteros+
	"<br>.La cantidad de hombres viudos es de: "+contadorViudos+
	"<br>d)La cantidad de adultos mayores con más de 38º de temperatura corporal es de: "+contadorMayoresTemperatura+
	"<br>e)El promedio de edad entre los hombres solteros es de: "+promedioSolteros);

}
