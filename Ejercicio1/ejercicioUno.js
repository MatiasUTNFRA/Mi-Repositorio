
function probarEjercicio(){
	
	var seguir = true;
	var mascota;
	var tipoPelaje;
	var edad;
	var edadParse;
	var nombre;
	var raza;
	var peso;
	var pesoParse;
	var estadoClinico;
	var temperatura;
	var temperaturaParse;
	var perroMasPesado;
	var contadorMascotas = 0;
	var contadorMascotasEnfermas = 0;
	var porcentajeEnfermos;
	var menorTempSinPelo;
	var mascotaMenorTemp;
	var flagMenorTempSinPelo = 0;
	var contadorGato = 0;
	var contadorPerro = 0;
	var contadorOtraCosa = 0;
	var sumaTempGato = 0;
	var sumaTempPerro = 0;
	var sumaTempOtraCosa = 0;
	var promedioTempGatos = 0;
	var promedioTempPerros = 0;
	var promedioTempOtraCosa = 0;
	var mascotaMayorPromedio;
	var porcentajeGatosPerros;
	var sumaPesoMascotas = 0;
	var promedioPesoMacotas;
	var gatoMasLiviano;
	var nombreGatoLiviano;
	var razaGatoLiviano;
	var flagGatoLiviano = 0;
	var estadoClinicoMenorMascotas;
	var ultimaOtraCosa;
	var contadorEnfermos = 0;
	var contadorInternados = 0;
	var contadorAdopcion = 0;

	do
	{
		mascota = prompt ('Ingresar el qué mascota es. ("gato", "perro" u "otra cosa")');

		while (mascota != "gato" && mascota != "perro" && mascota != "otra cosa" || isNaN (mascota) == false)
		{
			mascota = prompt ('Mascota inválida. Reingresar: ("gato", "perro" u "otra cosa")');
		}
		tipoPelaje = prompt ('Ingresar el tipo de pelaje que tiene. ("corto", "largo" o "sin pelo")');

		while (tipoPelaje != "corto" && tipoPelaje != "largo" && tipoPelaje != "sin pelo" || isNaN (tipoPelaje) == false)
		{
			tipoPelaje = prompt ('Tipo de pelje inválido. Reingresar: ("corto", "largo" o "sin pelo")');
		}
		edad = prompt ("Ingresar la edad de la mascota");
		edadParse = parseInt (edad);

		while (edadParse <= 0 || isNaN (edadParse) == true)
		{
			edadParse = parseInt (prompt ("Edad inválida. Reingresar:"));
		}
		nombre = prompt ("Ingresar el nombre");

		while (isNaN (nombre) == false)
		{
			nombre = prompt ("Nombre inválido. Reingresar:");
		}
		raza = prompt ("Ingresar la raza");

		while (isNaN (raza) == false)
		{
			raza = prompt ("Raza inválida. Reingresar:");
		}
		peso = prompt ("Ingresar el peso");
		pesoParse = parseFloat (peso);

		while (isNaN (pesoParse) == true || pesoParse <= 0 )
		{
			pesoParse = parseFloat (prompt ("Peso inválido. Reingresar:"));
		}
		estadoClinico = prompt ('Ingresar el estado clínico ("enfermo", "internado" o "adopcion")');

		while (estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion" || isNaN (estadoClinico) == false)
		{
			estadoClinico = prompt ('Estado clínico inválido. Reingresar: ("enefermo", "internado" o "adopcion")');
		}
		temperatura = prompt ("Ingresar la temperatura corporal de la mascota");
		temperaturaParse = parseFloat (temperatura);

		while (temperaturaParse < 35 || isNaN (temperaturaParse) == true)
		{
			temperaturaParse = parseFloat (prompt ("No es una temperatura válida. Reingresar:"))
		}
		switch (mascota)
		{
			case "gato":

				if (tipoPelaje == "sin pelo")
				{
					if (flagGatoLiviano == 0 || pesoParse < gatoMasLiviano)
					{
						gatoMasLiviano = pesoParse;
						nombreGatoLiviano = nombre;
						razaGatoLiviano = raza;
						flagGatoLiviano = 1;
					}
				}
				contadorGato++;
				sumaTempGato += temperaturaParse;

			break;

			case "perro":
				if (contadorPerro == 0 || pesoParse > perroMasPesado)
				{
					perroMasPesado = pesoParse;
				}
				contadorPerro ++;
				sumaTempPerro += temperaturaParse;

			break;

			case "otra cosa":
				contadorOtraCosa ++;
				sumaTempOtraCosa += temperaturaParse;
				ultimaOtraCosa = nombre;
			break;	
		}
		switch (estadoClinico)
		{
			case "enfermo":
				contadorEnfermos ++;
			break;
			case "internado":
				contadorInternados ++;
			break;	
			case "adopcion":
				contadorAdopcion ++;
			break;		
		}
		contadorMascotas ++;
		sumaPesoMascotas += pesoParse;

		if (estadoClinico == "enfermo")
		{
			contadorMascotasEnfermas ++;
		}
		if (tipoPelaje == "sin pelo")
		{
			if (flagMenorTempSinPelo == 0 || temperaturaParse < menorTempSinPelo)
			{
				menorTempSinPelo = temperaturaParse;
				mascotaMenorTemp = mascota;
				flagMenorTempSinPelo = 1;
			}
		}
		seguir = confirm ("¿Continuar ingresando?");

	}while (seguir);
	if (contadorPerro == 0)
	{
		perroMasPesado = "Ninguno";
	}
	
	porcentajeEnfermos = contadorMascotasEnfermas * 100 / contadorMascotas;
	if (flagMenorTempSinPelo == 0)
	{
		mascotaMenorTemp = "Ninguno";
	}
	promedioTempGatos = sumaTempGato / contadorGato;
	promedioTempPerros = sumaTempPerro / contadorPerro;
	promedioTempOtraCosa = sumaTempOtraCosa / contadorOtraCosa;

	if (contadorGato == 0)
	{
		promedioTempGatos = 0;
	}
	if (contadorPerro == 0)
	{
		promedioTempPerros = 0;
	}
	if (contadorOtraCosa == 0)
	{
		promedioTempOtraCosa = 0;
		ultimaOtraCosa = "Ninguno";
	}	
	console.log (promedioTempGatos);
	console.log (promedioTempPerros);
	console.log (promedioTempOtraCosa);

	if (promedioTempGatos > promedioTempPerros && promedioTempGatos > promedioTempOtraCosa)
	{
		mascotaMayorPromedio = "Gatos";
	}
	else
	{
		if (promedioTempPerros > promedioTempGatos && promedioTempPerros > promedioTempOtraCosa)
		{
			mascotaMayorPromedio = "Perros";
		}
		else
		{
			mascotaMayorPromedio = "Otra cosa";
		}
	}
	porcentajeGatosPerros = (contadorPerro + contadorGato) * 100 / contadorMascotas;
	
	if (contadorPerro == 0)
	{
		porcentajeGatosPerros = "Ninguno porque no hay perros ingresados";
	}
	if (contadorGato == 0)
	{
		porcentajeGatosPerros = "Ninguno porque no hay gatos ingresados";
	}

	promedioPesoMacotas = sumaPesoMascotas / contadorMascotas;

	if (flagGatoLiviano == 0)
	{
		nombreGatoLiviano = "Ninguno";
		razaGatoLiviano = "Ninguno";
	}

	if (contadorEnfermos < contadorInternados && contadorEnfermos < contadorAdopcion)
	{
		estadoClinicoMenorMascotas = "Enfermo";
	}
	else
	{
		if (contadorInternados < contadorEnfermos && contadorInternados < contadorAdopcion)
		{
			estadoClinicoMenorMascotas = "Internado";
		}
		else
		{
			estadoClinicoMenorMascotas = "Adopción";
		}
	}
	document.write ("a) El peso del perro más pesado es de: "+perroMasPesado+
	"<br>b) El porcentaje de enfermos sobre el total de mascotas es del %"+porcentajeEnfermos+
	"<br>c) El nombre de la última mascota de tipo Otra Cosa ingresada es: "+ultimaOtraCosa+
	"<br>d) El animal sin pelo con menor temperatura corporal es: "+mascotaMenorTemp+
	"<br>e) El tipo de mascota con mayor promedio es: "+mascotaMayorPromedio+
	"<br>f) La suma de gatos y perros sobre el total corresponde al porcentaje de: "+porcentajeGatosPerros+
	"<br>g) El estado clínico de la menor cantidad de mascotas es de: "+estadoClinicoMenorMascotas+
	"<br>h) El promedio de kilos sobre el total de mascotas es de: "+promedioPesoMacotas+
	"<br>i) Nombre: "+nombreGatoLiviano+" Raza: "+razaGatoLiviano);
}