
function mostrar()
{
	var seguir = true;
	var nombre;
	var edad;
	var sexo;
	var puesto;
	var sueldo;
	var contadorProgramador = 0;
	var contadorAnalista = 0;
	var contadorQa = 0;
	var acumuladorProgramador = 0;
	var acumuladorAnalista = 0;
	var acumuladorQa = 0;
	var promedioProgramador;
	var promedioAnalista;
	var promedioQa;
	var mayorSueldo;
	var sexoMayorSueldo;
	var flagMayorSueldo = 0;
	var mayorSueldoFemenino;
	var nombreMayorSueldoFemenino;
	var flagMayorSueldoFemenino = 0;
	var contadorNoBinarios = 0;

	do
	{
		nombre = prompt ("ingresar el nombre");

		while (isNaN (nombre) == false)
		{
			nombre = prompt ("Nombre inválido. Reingresar:");
		}
		edad = parseInt (prompt ("Ingresar la edad"));

		while (isNaN (edad) || edad < 18 || edad > 100)
		{
			edad = parseInt (prompt ("Edad inválida. Reingresar:"));
		}
		sexo = prompt ("Ingresar el sexo (masculino/femenino/no binario)");

		while (sexo != "masculino" && sexo != "femenino" && sexo != "no binario")
		{
			sexo = prompt ("Sexo inválido. Reingresar: (masculino/femenino/no binario)");
		}
		puesto = prompt ("Ingresar el puesto (programador/anailsta/qa)");

		while (puesto != "programador" && puesto != "analista" && puesto != "qa")
		{
			puesto = prompt ("Puesto inválido. Reingresar: (programador/anailsta/qa)");
		}
		sueldo = parseInt (prompt ("Ingresar el sueldo (entre 15000 y 70000)"));

		while (isNaN (sueldo) || sueldo < 15000 || sueldo > 70000)
		{
			sueldo = parseInt (prompt ("Sueldo inválido. Reingresar: (entre 15000 y 70000)"));
		}
		switch (puesto)
		{
			case "programador":
				contadorProgramador ++;
				acumuladorProgramador += sueldo;

				if (sexo == "no binario" && sueldo >= 20000 && sueldo <= 55000)
				{
					contadorNoBinarios ++;
				}
			break;

			case "analista":
				contadorAnalista ++;
				acumuladorAnalista += sueldo;
			break;

			case "qa":
				contadorQa ++;
				acumuladorQa += sueldo;
			break;	
		}
		if (flagMayorSueldo == 0 || sueldo > mayorSueldo)
		{
			mayorSueldo = sueldo;
			sexoMayorSueldo = sexo;
			flagMayorSueldo = 1;
		}
		if (sexo == "femenino")
		{
			if (flagMayorSueldoFemenino == 0 || sueldo > mayorSueldoFemenino)
			{
				mayorSueldoFemenino = sueldo;
				nombreMayorSueldoFemenino = nombre;
				flagMayorSueldoFemenino = 1;
			}
		}


		seguir = confirm ("¿Continuar ingresando?");
		

	}while (seguir);

	if (contadorProgramador == 0)
	{
		promedioProgramador = 0;
	}
	else
	{
		promedioProgramador = acumuladorProgramador / contadorProgramador;
	}
	if (contadorAnalista == 0)
	{
		promedioAnalista = 0;
	}
	else
	{
		promedioAnalista = acumuladorAnalista / contadorAnalista;
	}
	if (contadorQa == 0)
	{
		promedioQa = 0;
	}
	else
	{
		promedioQa = acumuladorQa / contadorQa;
	}
	if (flagMayorSueldoFemenino == 0)
	{
		document.write ("c) No se ingresaron empleados femeninos<br>");
	}
	else
	{
		document.write ("c) El nombre del empleado femenino con mayor sueldo es:"+nombreMayorSueldoFemenino+"<br>")
	}
	document.write ("a) Los promedios de sueldo para cada puesto son: Programadores: "+promedioProgramador+". Analistas: "+promedioAnalista+". QA: "+promedioQa);
	document.write ("<br>b) El sexo del que percibe mayor sueldo es: "+sexoMayorSueldo);
	document.write ("<br>d) Cantidad de programadores no binarios que cobran enre 20000 y 55000: "+contadorNoBinarios);
}
