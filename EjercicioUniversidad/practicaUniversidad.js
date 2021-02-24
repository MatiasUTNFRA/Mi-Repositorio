function probarEjercicio()
{	
	var seguir = true;
	var alumno = "";
	var carrera = "Ninguno";
	var estadoCarrera = "Ninguno";
	var sexo = "Ninguno";
	var edad = 17;
	var edadParse;
	var nota = 11;
	var notaParse;
	var contadorAlumnoViejo = 0;
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
	var promedio;
	var carreraMayorAlumnos;
	var flag = 0;

	do
	{
		while (alumno == "")
		{
			alumno = prompt ("Ingresar nombre");
			flag = 1;
			if (alumno == "")
			{
				alert ("No es un nombre válido");
			}
		}
		while (carrera != "Programación" && carrera != "Psicología" && carrera != "Diseño gráfico")
		{
			carrera = prompt ("Ingresar carrera");
			if (carrera != "Programación" && carrera != "Psicología" && carrera != "Diseño gráfico")
			{
				alert ("No es una carrera válida");
			}
		}
		while (estadoCarrera != "en curso" && estadoCarrera != "abandono" && estadoCarrera != "finalizado")
		{
			estadoCarrera = prompt ("Ingresar el estado de la carrera");
			if (estadoCarrera != "en curso" && estadoCarrera != "abandono" && estadoCarrera != "finalizado")
			{
				alert ("No es un estado de carrera válido");
			}
		}
		while (sexo != "femenino" && sexo != "masculino" && sexo != "no binario")
		{
			sexo = prompt ("Ingresar el sexo");
			if (sexo != "femenino" && sexo != "masculino" && sexo != "no binario")
			{
				alert ("No es un sexo válido");
			}
		} 
		while (edad < 18)
		{
			edad = prompt ("Ingresar edad");
			edadParse = parseInt (edad);
			if (edadParse < 18)
			{
				alert ("Deben ser 18 o más años de edad");
			}
		}
		while (nota < 1 || nota > 10)
		{
			nota = prompt ("Ingresar la nota");
			notaParse = parseInt (nota);
			if (notaParse < 1 || notaParse > 10)
			{
				alert ("La nota debe ser entre 1 y 10 inclusive");
			}

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

				if (contadorAlumnoViejo == 0)
				{
					maximoEdad = edadParse;
					maximoAlumno = alumno;
					maximoSexo = sexo;
					contadorAlumnoViejo = contadorAlumnoViejo + 1;
				}
				else
				{
					if (edadParse > maximoEdad)
					{
						maximoEdad = edadParse;
						maximoAlumno = alumno;
						maximoSexo = sexo;
					}
				}
				if (sexo == "no binario" && contadorMejorAlumno == 0)
				{
					mejorNota = notaParse;
					mejorAlumno = alumno;
					mejorEstado = estadoCarrera;
					contadorMejorAlumno = contadorMejorAlumno + 1;
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
		if (flag == 1)
		{
			alumno = "";
			carrera = "Ninguno";
			estadoCarrera = "Ninguno";
			sexo = "Ninguno";
			edad = 17;
			nota = 11;
		}
		seguir = confirm ("¿Continuar ingresando?");

	}while (seguir);

	promedio = sumaFinalizantes / contadorFinalizantes;

	if ((contadorProgramacion > contadorPsicologia) && (contadorProgramacion > contadorDiseño))
	{
		carreraMayorAlumnos = contadorProgramacion;
		carrera = "Programación";
	}
	else
	{
		if ((contadorPsicologia > contadorProgramacion) && (contadorPsicologia > contadorDiseño))
		{
			carreraMayorAlumnos = contadorPsicologia;
			carrera = "Psicología";
		}
		else
		{
			if ((contadorDiseño > contadorPsicologia) && (contadorDiseño > contadorProgramacion))
			{
				carreraMayorAlumnos = contadorDiseño;
				carrera = "Diseño gráfico";
			}
		}
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
	document.write ("F. El nombre, la nota y el estado de la carrera del mejor alumno no binario de la carrera Psicología es de: "+mejorAlumno+", con una nota de "+mejorNota+" y el estado de su carrera: "+mejorEstado+".");
	document.write ("<br>");
	document.write ("E. La carrera con la mayor cantidad de alumnos es: "+carrera+", con "+carreraMayorAlumnos+".");
}
		