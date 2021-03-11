function mostrar()
{
    var nombre;
	var carrera;
	var sexo;
	var cantidadMaterias;
	var notaPromedio;
	var edad;
	var mejorNotaPromedio;
	var nombreMejorPromedio;
	var flagMejorPromedio = 0;
	var AlumnaMasJoven;
	var nombreAlumnaMasJoven;
	var contadorFisica = 0;
	var contadorQuimica = 0;
	var contadorSistemas = 0;
	var porcentajeFisica;
	var porcentajeQuimica;
	var porcentajeSistemas;
	var mayorCantidadMaterias;
	var flagMayorCantidadMaterias = 0;
	var nombreMayorCantidadMaterias;
	var edadMayorCantidadMaterias;

	for (var i = 0 ; i < 500 ; i++)
	{
		nombre = prompt ("Ingresar el nombre del alumno");

		while (isNaN (nombre) == false)
		{
			nombre = prompt ("Nombre inválido. Reingresar:");
		}
		carrera = prompt ("ingresar la carrera (quimica/fisica/sistemas)");

		while (carrera != "quimica" && carrera != "fisica" && carrera != "sistemas")
		{
			carrera = prompt ("Carrera inválida. Reingresar: (quimica/fisica/sistemas)");
		}
		sexo = prompt ("Ingresar el sexo (masculino/femenino/no binario)");

		while (sexo != "masculino" && sexo != "femenino" && sexo != "no binario")
		{
			sexo = prompt ("Sexo inválido. Reingresar: (masculino/femenino/no binario)");
		}
		cantidadMaterias = parseInt (prompt ("Ingresar la cantidad de materias (entre 1 y 5)"));

		while (isNaN (cantidadMaterias) || cantidadMaterias < 1 || cantidadMaterias > 5)
		{
			cantidadMaterias = parseInt (prompt ("Cantidad de materias inválida. Reingresar: (entre 1 y 5)"));
		}
		notaPromedio = parseInt (prompt ("Ingresar la nota promedio (entre 0 y 10)"));

		while (isNaN (notaPromedio) || notaPromedio < 0 || notaPromedio > 10)
		{
			notaPromedio = parseInt (prompt ("Nota promedio inválida. Reingresar: (entre 0 y 10)"));
		}
		edad = parseInt (prompt ("Ingresar la edad"));

		while (isNaN (edad) || edad < 18 || edad > 100)
		{
			edad = parseInt (prompt ("Edad inválida. Reingresar:"));
		}
		switch (carrera)
		{
			case "fisica":
				if (flagMejorPromedio == 0 || notaPromedio > mejorNotaPromedio)
				{
					mejorNotaPromedio = notaPromedio;
					nombreMejorPromedio = nombre;
					flagMejorPromedio = 1;
				}
				contadorFisica ++;
			break;

			case "quimica":
				contadorQuimica ++;
			break;	

			case "sistemas":
				contadorSistemas ++;
			break;	
		}
		if (i == 0 || edad < AlumnaMasJoven)
		{
			AlumnaMasJoven = edad;
			nombreAlumnaMasJoven = nombre;
		}
		if (carrera != "quimica")
		{
			if (flagMayorCantidadMaterias == 0 || cantidadMaterias > mayorCantidadMaterias)
			{
				mayorCantidadMaterias = cantidadMaterias;
				nombreMayorCantidadMaterias = nombre;
				edadMayorCantidadMaterias = edad;
				flagMayorCantidadMaterias = 1;
			}
		}
	}
	if (flagMejorPromedio == 0)
	{
		document.write ("a) No hay alumnos que cursen la carrera de física <br>");
	}
	else
	{
		document.write ("a) El nombre del mejor alumno de física es: "+nombreMejorPromedio+"<br>");
	}
	porcentajeFisica = contadorFisica * 100 / i;
	porcentajeQuimica = contadorQuimica * 100 / i;
	porcentajeSistemas = contadorSistemas *100 / i;

	if (flagMayorCantidadMaterias == 0)
	{
		document.write ("d) No hay alumnos que cursen física o sistemas<br>");
	}
	else
	{
		document.write ("d) El nombre es: "+nombreMayorCantidadMaterias+". La edad es: "+edadMayorCantidadMaterias+"<br>");
	}
	document.write ("b) El nombre de la alumna más joven es: "+nombreAlumnaMasJoven);
	document.write ("<br>c) El porcentaje de estudiantes que estudia cada carrera es: Física: %"+porcentajeFisica+". Química: %"+porcentajeQuimica+". Sistemas: %"+porcentajeSistemas);
	
}
