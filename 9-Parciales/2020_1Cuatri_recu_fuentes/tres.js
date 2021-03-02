function mostrar()
{	
	var seguir = true;
	var nombre;
	var nacionalidad;
	var edad;
	var edadParse;
	var sexo;
	var estadoCivil;
	var temperatura;
	var temperaturaParse;
	var mayorTemperatura;
	var nacionalidadMayorTemp;
	var contadorMayorEdadSolteros = 0;
	var contadorMujeresSolteras = 0;
	var contadorMujeresViudas = 0;
	var contadorMayoresTemp = 0;
	var contadorMujeresCasadas = 0;
	var sumaEdad = 0;
	var promedioMujeresCasadas;
	var flag = 0;

	do
	{
		nombre = prompt ("Ingresar nombre");
		
		while (isNaN (nombre) == false)
		{
			nombre = prompt ("No es un nombre válido. Reingresar:");
		}
		nacionalidad = prompt ("Ingresar la nacionalidad");

		while (isNaN (nacionalidad) == false)
		{
			nacionalidad = prompt ("No es una nacionalidad válida. Reingresar:");
		}
		edad = prompt ("Ingresar edad");
		edadParse = parseInt (edad);

		while (edadParse <= 0 || isNaN (edadParse) == true)
		{
			edadParse = parseInt (prompt ("No es una edad válida. Reingrear:"));
		}
		sexo = prompt ('Ingresar el sexo ("f" o "m")');

		while (sexo != "f" && sexo != "m" || isNaN (sexo) == false)
		{
			sexo = prompt ("No es un sexo válido");
		}
		estadoCivil = prompt ('Ingresar estado civil ("soltero", "casado" o "viudo")');

		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo" || isNaN(estadoCivil) == false)
		{
			estadoCivil = prompt ("Estado civil inválido. Reingresar:");
		}
		temperatura = prompt ("Ingresar la temperatura corporal");
		temperaturaParse = parseFloat (temperatura);

		while (temperaturaParse < 35 || temperaturaParse > 46 || isNaN (temperaturaParse) == true)
		{
			temperaturaParse = parseFloat (prompt ("No es una temperatura válida. Reingresar:"));
		}
		if (flag == 0 || temperaturaParse > mayorTemperatura)
		{
			mayorTemperatura = temperaturaParse;
			nacionalidadMayorTemp = nacionalidad;
			flag = 1;
		}
		switch (estadoCivil)
		{
			case "soltero":
				if (edadParse > 17)
				{
					contadorMayorEdadSolteros ++;
				}
				if (sexo == "f")
				{
					contadorMujeresSolteras ++;
				}
			break;

			case "casado":
				if (sexo == "f")
				{
					contadorMujeresCasadas ++;
					sumaEdad += edadParse;
				}
			break;

			case "viudo":
				if (sexo == "f")
				{
					contadorMujeresViudas ++;
				}
			break;
		}
		if (edadParse >= 60 && temperaturaParse >= 38)
		{
			contadorMayoresTemp ++;
		}
		seguir = confirm ("¿Continuar ingresando?");
	}while (seguir);

	if (contadorMujeresCasadas == 0)
	{
		promedioMujeresCasadas = 0;
	}
	else
	{
		promedioMujeresCasadas = sumaEdad / contadorMujeresCasadas;
	}
	document.write ("a) La nacionalidad de la paersona con más temperatura es: "+nacionalidadMayorTemp+", con una temperatura corporal de: "+mayorTemperatura+"°"+
	"<br>b) la cantidad de mayores de edad solteros es de: "+contadorMayorEdadSolteros+
	"<br>c) . La cantidad de mujeres solteras es de: "+contadorMujeresSolteras+
	"<br>. La cantidad de mujeres viudas es de: "+contadorMujeresViudas+
	"<br>d) La cantidad de personas mayores de edad con una temperatura corporal superior a 38° es de: "+contadorMayoresTemp+
	"<br>e) El promedio de edad entre las mujeres casadas es de: "+promedioMujeresCasadas);



}
