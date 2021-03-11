function mostrar()
{
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

