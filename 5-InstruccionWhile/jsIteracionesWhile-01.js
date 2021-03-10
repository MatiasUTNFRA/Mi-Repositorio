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
	/*var nombre;
	var edad;
	var sexo;
	var puesto;
	var sueldo;
	var seguir = true;
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
		nombre = prompt ("Ingresar nombre");
		
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
		puesto = prompt ("Ingresar el puesto (programador/analista/qa)");

		while (puesto != "programador" && puesto != "analista" && puesto != "qa")
		{
			puesto = prompt ("Puesto inválido. Reingresar: (programador/analista/qa)");
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
		if (sexo == "femenino")
		{
			if (flagMayorSueldoFemenino == 0 || sueldo > mayorSueldoFemenino)
		    {
				mayorSueldoFemenino = sueldo;
				nombreMayorSueldoFemenino = nombre;
				flagMayorSueldoFemenino = 1;
		    }
		}
		if (flagMayorSueldo == 0 || sueldo > mayorSueldo)
		{
			mayorSueldo = sueldo;
			sexoMayorSueldo = sexo;
			flagMayorSueldo = 1;
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
		document.write ("c) No se ha ingresado ningúno de sexo femenino<br>");
	}
	else
	{
		document.write ("c) El nombre del empleado femenino con mayor sueldo es: "+nombreMayorSueldoFemenino+"<br>");
	}
	document.write ("a) El promedio de sueldo de los programadores es de: "+promedioProgramador+". Analistas: "+promedioAnalista+". QA: "+promedioQa);
	document.write ("<br>b) El sexo del que percibe mayor sueldo es: "+sexoMayorSueldo);
	document.write ("<br>d) La cantidad de programadores no binarios con ese rango de sueldo es: "+contadorNoBinarios);*/
	
	/*var nombre;
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
	document.write ("<br>c) El porcentaje de estudiantes que estudia cada carrera es: Física: %"+porcentajeFisica+". Química: %"+porcentajeQuimica+". Sistemas: %"+porcentajeSistemas);*/
	
	var seguir = true;
	var nombre;
	var cantidadLamparas;
	var marca;
	var precio;
	var montoSinDescuento;
	var montoConDescuento;
	var perdida;
	var precioFelipe = 0;
	var precioArgentina = 0;
	var precioilluminatis = 0;
	var acumuladorFelipe = 0;
	var acumuladorArgentina = 0;
	var acumuladorIlluminatis = 0;
	var acumuladorUnidadesFelipe = 0;
	var acumuladorUnidadesArgentina = 0;
	var acumuladorUnidadesIlluminatis = 0;
	var descuentoFelipe = 0;
	var descuentoArgentina = 0;
	var descuentoTotal = 0;
	var contadorFelipe = 0;
	var contadorArgentina = 0;
	var contadorIlluminatis = 0;
	var promedioFelipe;
	var promedioArgentina;
	var promedioIlluminatis;
	
	do
	{
		nombre = prompt ("Ingresar el nombre del cliente");

		while (isNaN (nombre) == false)
		{
			nombre = prompt ("Nombre inválido. Reingresar:");
		}
		cantidadLamparas = parseInt (prompt ("Ingresar la cantidad de lámparas"));

		while (isNaN (cantidadLamparas))
		{
			cantidadLamparas = parseInt (prompt ("Cantidad inválida. Reingresar:"));
		}
		marca = prompt ("Ingresar la marca (felipelamparas/argentinaluz/illuminatis");

		while (marca != "felipelamparas" && marca != "argentinaluz" && marca != "illuminatis")
		{
			marca = prompt ("Marca inválida. Reingresar: (felipelamparas/argentinaluz/illuminatis");
		}
		precio = parseInt (prompt ("Ingresar el precio"));

		while (isNaN (precio))
		{
			precio = parseInt (prompt ("Precio inválido. Reingresar:"));
		}
		switch (marca)
		{
			case "felipelamparas":
				precioFelipe = precio * cantidadLamparas;
				acumuladorFelipe += precioFelipe;
				acumuladorUnidadesFelipe += cantidadLamparas;
				contadorFelipe ++;

				if (acumuladorUnidadesFelipe >= 5)
				{
					descuentoFelipe = 10;
				}
			break;

			case "argentinaluz":
				precioArgentina = precio * cantidadLamparas;
				acumuladorArgentina += precioArgentina;
				acumuladorUnidadesArgentina += cantidadLamparas;
				contadorArgentina ++;

				if (acumuladorUnidadesArgentina >= 3)
				{
					descuentoArgentina = 5;
				}
				break;	

			case "illuminatis":
				precioilluminatis = precio * cantidadLamparas;
				acumuladorIlluminatis += precioilluminatis;
				acumuladorUnidadesIlluminatis += cantidadLamparas;
				contadorIlluminatis ++;
			break;	
		}
		seguir = confirm ("¿Continuar ingresando?");

	}while (seguir);

	montoSinDescuento = acumuladorFelipe + acumuladorArgentina + acumuladorIlluminatis;
	descuentoTotal = descuentoFelipe + descuentoArgentina;

	if (descuentoTotal != 0)
	{	
		montoConDescuento = montoSinDescuento - montoSinDescuento * descuentoTotal / 100;
		perdida = montoSinDescuento * descuentoTotal / 100;

		document.write ("a) La empresa recaudó: $"+montoConDescuento+"<br>");
		document.write ("b) La pérdida registrada fue de: $"+perdida+"<br>");
	}
	else
	{
		document.write ("a) La empresa recaudó: $"+montoSinDescuento+"<br>");
		document.write ("b) No se registraron pérdidas<br>");
	}
	if (contadorFelipe == 0)
	{
		promedioFelipe = 0;
	}
	else
	{
		promedioFelipe = acumuladorUnidadesFelipe / contadorFelipe;
	}
	if (contadorArgentina == 0)
	{
		promedioArgentina = 0;
	}
	else
	{
		promedioArgentina = acumuladorUnidadesArgentina / contadorArgentina;
	}
	if (contadorIlluminatis == 0)
	{
		promedioIlluminatis = 0;
	}
	else
	{
		promedioIlluminatis = acumuladorUnidadesIlluminatis / contadorIlluminatis;
	}
	if (contadorFelipe > contadorArgentina && contadorFelipe > contadorIlluminatis)
	{
		document.write ("d) La marca con más ventas es FelipeLámparas <br>");
	}
	else
	{
		if (contadorArgentina > contadorFelipe && contadorArgentina > contadorIlluminatis)
		{
			document.write ("d) La marca con más ventas es ArgentinaLuz <br>");
		}
		else
		{
			document.write ("d) La marca con más ventas es Illuminatis <br>");
		}
	}
	document.write ("c) El promedio de cada marca es: FelipeLámparas: "+promedioFelipe+" ArgentinaLuz: "+promedioArgentina+" Illuminatis: "+promedioIlluminatis);
}
