function probarEjercicio()
{	
	/*var seguir = true;
	var alumno;
	var carrera;
	var estadoCarrera;
	var sexo;
	var edad;
	var edadParse;
	var nota;
	var notaParse;
	var maximoEdad;
	var maximoAlumno;
	var maximoSexo;
	var contadorMejorAlumno = 0;
	var mejorAlumno;
	var mejorNota;
	var mejorEstado;
	var contadorFinalizantes = 0;
	var contadorProgramacion = 0;
	var contadorPsicologia = 0;
	var contadorDiseño = 0;
	var contadorMujeres = 0;
	var contadorNoBinarios = 0;
	var sumaFinalizantes = 0;
	var flag1 = 0;
	var flag2 = 0;
	var promedio = 0;
	var carreraMayorAlumnos;

	do
	{	
		alumno = prompt ("Ingresar nombre");

		while (isNaN (alumno) == false)
		{
			alumno = prompt ("No es un nombre váilido. Reingresar:");
		}

		carrera = prompt ('Ingresar carrera: "Programación", "Psicología" o "Diseño gráfico');
		
		while (carrera != "Programación" && carrera != "Psicología" && carrera != "Diseño gráfico" || isNaN (carrera) == false)
		{
			carrera = prompt ("No es una carrera válida. Reingresar:");
		}
		estadoCarrera = prompt ('Ingresar el estado de la carrera: "en curso", "abandono" o "finalizado"');

		while (estadoCarrera != "en curso" && estadoCarrera != "abandono" && estadoCarrera != "finalizado" || isNaN (estadoCarrera) == false)
		{
			estadoCarrera = prompt ("No es un estado de carrera válido. Reintentar:");
			
		}
		sexo = prompt ('Ingresar el sexo: "femenino", "masculino" o "no binario"');

		while (sexo != "femenino" && sexo != "masculino" && sexo != "no binario" || isNaN (sexo) == false)
		{
			sexo = prompt ("No es un sexo válido. Reingresar");
		}
		edad = prompt ("Ingresar edad");
		edadParse = parseInt (edad);

		while (edadParse < 18 || isNaN (edadParse) == true)
		{
			edadParse = parseInt (prompt ("La edad debe ser mayor o igual a 18 años. Reintentar:"));
		}
		nota = prompt ("Ingresar la nota");
		notaParse = parseInt (nota);

		while (notaParse < 1 || notaParse > 10 || isNaN (notaParse) == true)
		{
			notaParse = parseFloat (prompt ("La nota debe ser entre 1 a 10 inclusive. Reintentar:"))
		}
		switch (carrera)
		{
			case "Programación":

				contadorProgramacion = contadorProgramacion + 1;

				if (sexo == "femenino" && estadoCarrera == "en curso")
				{
					contadorMujeres = contadorMujeres + 1;
				}
			break;

			case "Psicología":

				contadorPsicologia = contadorPsicologia + 1;

				if (contadorPsicologia == 1 || edadParse > maximoEdad)
				{
					maximoEdad = edadParse;
					maximoAlumno = alumno;
					maximoSexo = sexo;
					flag1 = 1;
				}
			
				if (sexo == "no binario" && contadorMejorAlumno == 0)
				{
					mejorNota = notaParse;
					mejorAlumno = alumno;
					mejorEstado = estadoCarrera;
					contadorMejorAlumno = contadorMejorAlumno + 1;
					flag2 = 1;
				}
				else
				{
					if (notaParse > mejorNota)
					{
						mejorNota = notaParse;
					    mejorAlumno = alumno;
					    mejorEstado = estadoCarrera;
					}
				}
			break;

			case "Diseño gráfico":

				contadorDiseño = contadorDiseño + 1;

			break;
		}
		if (sexo == "no binario")
		{
			contadorNoBinarios = contadorNoBinarios + 1;
		}
		if (estadoCarrera == "finalizado")
		{
			sumaFinalizantes = sumaFinalizantes + notaParse;
			contadorFinalizantes = contadorFinalizantes + 1;
		}

		seguir = confirm ("¿Continuar ingresando?");

	}while (seguir);

	if (contadorFinalizantes == 1)
	{
		promedio = sumaFinalizantes / contadorFinalizantes;
	}

	if (contadorProgramacion > contadorPsicologia) && contadorProgramacion > contadorDiseño)
	{
		carreraMayorAlumnos = contadorProgramacion;
		carrera = "Programación";
	}
	else
	{
		if (contadorPsicologia > contadorProgramacion && contadorPsicologia > contadorDiseño)
		{
			carreraMayorAlumnos = contadorPsicologia;
			carrera = "Psicología";
		}
		else
		{
			carreraMayorAlumnos = contadorDiseño;
			carrera = "Diseño gráfico";
		}
	}
	if (flag1 == 0)
	{
		maximoAlumno = "Ninguno";
		maximoSexo = "Ninguno";
		maximoEdad = 0;
	}
	if (flag2 == 0)
	{
		mejorAlumno = "Ninguno";
		mejorEstado = "Ninguno";
		mejorNota = 0;
	}
	document.write ("A. La cantidad total de alumnos de cada carrera es de: "+contadorProgramacion+" de Programación, "+contadorPsicologia+" de Psicología y "+contadorDiseño+" de Diseño gráfico.");
	document.write ("<br>");
	document.write ("B. La cantidad total de mujeres que cursan la carrera de Programación es de: "+contadorMujeres+".");
	document.write ("<br>");
	document.write ("C. La cantidad de alumnos no binarios es de: "+contadorNoBinarios+".");
	document.write ("<br>");
	document.write ("D. El promedio de notas de los alumnos que finalizaron las carreras es de: "+promedio+".");
	document.write ("<br>");
	document.write ("E. El nombre, sexo y edad del alumno más viejo de la carrera de Psicología es: "+maximoAlumno+", de sexo "+maximoSexo+" y con una edad de "+maximoEdad+" años.");
	document.write ("<br>");
	document.write ("F. El nombre, la nota y el estado de la carrera del mejor alumno no binario de la carrera Psicología es de: "+mejorAlumno+", con una nota de: "+mejorNota+" y el estado de su carrera: "+mejorEstado+".");
	document.write ("<br>");
	document.write ("E. La carrera con la mayor cantidad de alumnos es: "+carrera+", con "+carreraMayorAlumnos+".");*/
	
	// Ejercicio: "Superchino"
	/*var seguir = true;
	var tipo;
	var nombreProducto;
	var importeProducto;
	var importeProductoParse;
	var procedencia;
	var peso;
	var pesoParse;
	var mayorPeso;
	var nombrePesado;
	var masCaro;
	var nombreCaro;
	var nombreBarato;
	var masBarato;
	var tipoMasPresente;
	var sumaComestible = 0;
	var sumaLimpieza = 0;
	var sumaOtros = 0;
	var contadorLimpieza = 0;
	var contadorComestible = 0;
	var contadorOtros = 0;
	var contadorNacional = 0;
	var contadorImportado = 0;
	var contadorElaborado = 0;
	var flagCaro = 0;
	var flag1 = 0;
	var flag2 = 0;
	var promedioComestible = 0;
	var promedioLimpieza = 0;
	var promedioOtros = 0;
	var totalTipos;
	var porcentajeElaborados;

	do
	{
		tipo = prompt ('Ingresar tipo de producto ("limpieza", "comestible", "otros")');

		while (tipo != "limpieza" && tipo != "comestible" && tipo != "otros" || isNaN (tipo) == false)
		{
			tipo = prompt ("No es un tipo de producto válido. Reingresar");
		}
		nombreProducto = prompt ("Ingresar el nombre del producto");

		while (isNaN (nombreProducto) == false)
		{
			nombreProducto = prompt ("Nombre inválido. Reingresar:");
		}
		importeProducto = prompt ("Ingresar el importe del producto (no puede ser mayor a $1000)");
		importeProductoParse = parseFloat (importeProducto);
		
		while(importeProductoParse < 1 || importeProductoParse > 1000 || isNaN (importeProductoParse) == true)
		{
			importeProductoParse = parseFloat (prompt ("No es un importe válido. Reingresar: "));
		}
		procedencia = prompt ('Ingresar la procedencia ("importado", "nacional", "elaborado")');

		while(procedencia != "importado" && procedencia != "nacional" && procedencia != "elaborado" || isNaN (procedencia) == false)
		{
			procedencia = prompt ("Dato no válido. Reingresar:");
		}
		peso = prompt ("Ingresar el peso (no puede ser mayor a 30 kilos)");
		pesoParse = parseFloat (peso);

		while(pesoParse < 1 || pesoParse > 30 || isNaN (pesoParse) == true)
		{
			pesoParse = parseFloat (prompt ("No es un peso válido. Reingresar:"));
		}
		switch (tipo)
		{
			case "comestible":

				if (contadorComestible == 0 || pesoParse > mayorPeso)
				{
					mayorPeso = pesoParse;
					nombrePesado = nombreProducto;
					flag1 = 1;
				}
				contadorComestible++;
				sumaComestible += pesoParse;
			break;

			case "limpieza":

				contadorLimpieza++;
				sumaLimpieza += pesoParse;
			break;

			case "otros":

				contadorOtros++;
				sumaOtros += pesoParse;
			break;

		}
		switch (procedencia)
		{
			case "elaborado":

				if (contadorElaborado == 0 || importeProductoParse < masBarato)
				{
					masBarato = importeProductoParse;
					nombreBarato = nombreProducto;
					flag2 = 1;
				}		
				contadorElaborado++;

			break;

			case "importado":

				contadorImportado++;
			break;
			case "nacional":

				contadorNacional++;
			break;			
		}
		if (flagCaro == 0 || importeProductoParse > masCaro)
		{
			masCaro = importeProductoParse;
			nombreCaro = nombreProducto;
			flagCaro = 1;
		}
	
		seguir = confirm ("¿Continuar ingresando?");

	}while (seguir);
	
	if (contadorComestible > contadorLimpieza && contadorComestible > contadorOtros)
	{
		tipoMasPresente = contadorComestible;
		tipo = "Comestible";
	}
	else
	{
		if (contadorLimpieza > contadorComestible && contadorLimpieza > contadorOtros)
		{
			tipoMasPresente = contadorLimpieza;
			tipo = "Limpieza";
		}
		else
		{
			tipoMasPresente = contadorOtros;
			tipo = "Otros";
		}
	}
	totalTipos = contadorNacional + contadorElaborado + contadorImportado;
	porcentajeElaborados = contadorElaborado * 100 / totalTipos;

	if (flag1 == 0)
	{
		nombrePesado = "Ninguno";
		mayorPeso = 0;
	}
	if (flag2 == 0)
	{
		nombreBarato = "Ninguno";
		masBarato = 0;
	}
	if (contadorComestible == 1)
	{
		promedioComestible = sumaComestible / contadorComestible;
	}
	if (contadorLimpieza == 1)
	{
		promedioLimpieza = sumaLimpieza / contadorLimpieza;
	}
	if (contadorOtros == 1)
	{
		promedioOtros = sumaOtros / contadorOtros;
	}
	document.write ("a) El nombre del producto comestible mas pesado es: "+nombrePesado+". Con un peso de: "+mayorPeso+"kg."+
	"<br>b) El nombre del producto más caro es: "+nombreCaro+". Con un precio de: $"+masCaro+
	"<br>c) El nombre del producto elaborado más barato es: "+nombreBarato+". Con un precio de: $"+masBarato+
	"<br>d) El tipo de producto más comprado es: "+tipo+". Con una cantidad de: "+tipoMasPresente+
	"<br>e) El porcentaje de productos elaborados por sobre el total es de: %"+porcentajeElaborados+
	"<br>f) El promedio de peso por cada tipo es: "+
	"<br> . Comestibles: "+promedioComestible+
	"<br> . Limpieza: "+promedioLimpieza+
	"<br> . Otros: "+promedioOtros);*/

	//Ejercicio: Veterinaria
	var tipo;
	var raza;
	var edad;
	var edadParse;
	var nombre;
	var mayorEdadPerros;
	var nombreViejoPerros;
	var mayorEdadGatos;
	var nombreViejoGatos;
	var mayorEdadPajaros;
	var nombreViejoPajaros;
	var mayorEdadOtros;
	var nombreViejoOtros;
	var falgEdadPerros = 0;
	var flagEdadGatos = 0;
	var falgEdadPajaros = 0;
	var flagEdadOtros = 0;
	var contadorSiames = 0;
	var contadorTurco = 0;
	var contadorPeterbald = 0;
	var contadorgenerico = 0;
	var sumaSiames = 0;
	var sumaTurco = 0;
	var sumaPeterbald = 0;
	var sumaGenerico = 0;
	var razaMasAnimales;
	var promedioMasAnimales = 0;

	for (var i = 0 ; i < 10 ; i++)
	{
		tipo = prompt ('Ingresar tipo de mascota: "perro", "gato", "pajaro", "otros"');

		while (tipo != "perro" && tipo != "gato" && tipo != "pajaro" && tipo != "otros" || isNaN (tipo) == false)
		{
			tipo = prompt ('No es un tipo de mascota válido. Debe ser "perro", "gato", "pajaro" u "otros"');
		}
		if (tipo == "perro")
		{
			raza = prompt ('Ingresar la raza: "pastor", "toy" o "callejero"');

			while (raza != "pastor" && raza != "toy" && raza != "callejero" || isNaN(raza) == false)
			{
				raza = prompt ('No es una raza válida. Debe ser "pastor", "toy" o "callejero"');
			}
			edad = prompt ("Ingresar la edad: (Debe ser entre 1 y 20 años)");
			edadParse = parseInt (edad);

			while (edadParse < 1 || edadParse > 20 || isNaN (edadParse) == true)
			{
				edadParse = parseInt (prompt ("No es una edad válida. Debe ser entre 1 a 20 años"));
			}
		}
		else
		{
			if (tipo == "gato")
			{
				raza = prompt ('Ingresar la raza: "siames", "turco", "peterbald" o "generico"');

				while (raza != "siames" && raza != "turco" && raza != "peterbald" && raza != "generico" || isNaN (raza) == false)
				{
					raza = prompt ('No es una raza válida. Debe ser "siames", "turco", "peterbald" o "generico"');
				}
				edad = prompt ("Ingresar la edad: (Debe ser entre 1 y 20 años)");
				edadParse = parseInt (edad);

				while (edadParse < 1 || edadParse > 20 || isNaN (edadParse) == true)
				{
					edadParse = parseInt (prompt ("No es una edad válida. Debe ser entre 1 a 20 años"));
				}
			}
			else
			{
				if (tipo == "pajaro")
				{
					edad = prompt ("Ingresar la edad: (Debe ser entre 1 y 50 años)");
					edadParse = parseInt (edad);

						while (edadParse < 1 || edadParse > 50 || isNaN (edadParse) == true)
					{
						edadParse = parseInt (prompt ("No es una edad válida. Debe ser entre 1 a 50 años"));
					}
				}
				else
				{
					edad = prompt ("Ingresar la edad: (Debe ser entre 1 y 100 años)");
					edadParse = parseInt (edad);

						while (edadParse < 1 || edadParse > 100 || isNaN (edadParse) == true)
					{
						edadParse = parseInt (prompt ("No es una edad válida. Debe ser entre 1 a 100 años"));
					}
				}
			}
		}
		nombre = prompt ("ingresar nombre de la mascota");

		while (isNaN (nombre) == false)
		{
			nombre = prompt ("No es un nombre válido. Reingresar:");
		}
		switch (tipo)
		{
			case "perro":
				if (falgEdadPerros == 0 || edadParse > mayorEdadPerros)
				{
					mayorEdadPerros = edadParse;
					nombreViejoPerros = nombre;
					falgEdadPerros = 1;
				}
			break;

			case "gato":
				if (flagEdadGatos == 0 || edadParse > mayorEdadGatos)
				{
					mayorEdadGatos = edadParse;
					nombreViejoGatos = nombre;
					flagEdadGatos = 1;
				}
				switch (raza)
				{
					case "siames":
						contadorSiames ++;
						sumaSiames += edadParse;
					break;

					case "turco":
						contadorTurco ++;
						sumaTurco += edadParse;
					break;

					case "peterbald":
						contadorPeterbald ++;
						sumaPeterbald += edadParse;
					break;

					case "generico":
						contadorgenerico ++;
						sumaGenerico += edadParse;
					break;
				}
			break;

			case "pajaro":
				if (falgEdadPajaros == 0 || edadParse > mayorEdadPajaros)
				{
					mayorEdadPajaros = edadParse;
					nombreViejoPajaros = nombre;
					falgEdadPajaros = 1;
				}
			break;

			case "otros":
				if (flagEdadOtros == 0 || edadParse > mayorEdadOtros)
				{
					mayorEdadOtros = edadParse;
					nombreViejoOtros = nombre;
					flagEdadOtros = 1;
				}
			break;
		}
	}
	if (falgEdadPerros == 0)
	{
		nombreViejoPerros = "Ninguno";
		mayorEdadPerros = 0;
	}
	if (flagEdadGatos == 0)
	{
		nombreViejoGatos = "Ninguno";
		mayorEdadGatos = 0;
	}
	if (falgEdadPajaros == 0)
	{
		nombreViejoPajaros = "Ninguno";
		mayorEdadPajaros = 0;
	}
	if (flagEdadOtros == 0)
	{
		nombreViejoOtros = "Ninguno";
		mayorEdadOtros = 0;
	}
	if (contadorSiames > contadorTurco && contadorSiames > contadorPeterbald && contadorSiames > contadorgenerico)
	{
		razaMasAnimales = "Siames";
		promedioMasAnimales = sumaSiames / contadorSiames;
	}
	else
	{
		if (contadorTurco > contadorSiames && contadorTurco > contadorPeterbald && contadorTurco > contadorgenerico)
		{
			razaMasAnimales = "Turco";
			promedioMasAnimales = sumaTurco / contadorTurco;
		}
		else
		{
			if (contadorPeterbald > contadorSiames && contadorPeterbald > contadorTurco && contadorPeterbald > contadorgenerico)
			{
				razaMasAnimales = "Peterbald";
				promedioMasAnimales = sumaPeterbald / contadorPeterbald;
			}
			else
			{
				razaMasAnimales = "Genérico";
				promedioMasAnimales = sumaGenerico / contadorgenerico;
			}
		}
	}
	if (flagEdadGatos == 0)
	{
		razaMasAnimales = "Ninguno";
		promedioMasAnimales = 0;
	}
	document.write ("a) . El nombre del más viejo de los perros es: "+nombreViejoPerros+", con una edad de "+mayorEdadPerros+" años"+
	"<br>. El nombre del más viejo de los gatos es: "+nombreViejoGatos+", con una edad de "+mayorEdadGatos+" años"+
	"<br>. El nombre del más viejo de los pájaros es: "+nombreViejoPajaros+", con una edad de "+mayorEdadPajaros+" años"+
	"<br>. El nombre del más viejo de los demás es: "+nombreViejoOtros+", con una edad de "+mayorEdadOtros+" años"+
	"<br>b) La raza con más cantidad de gatos es: "+razaMasAnimales+", con un promedio de edad de: "+promedioMasAnimales+" años");
}