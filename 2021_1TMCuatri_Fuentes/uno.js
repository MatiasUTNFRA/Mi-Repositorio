
function mostrar()
{	
	/*var nombre;
	var tipoProducto;
	var precio;
	var precioParse;
	var cantidadUnidades;
	var cantidadUnidadesParse;
	var tipoInflamable;
	var marca;
	var contadorAlcohol = 0;
	var contadorIac = 0;
	var contadorQuat = 0;
	var sumaAlcohol = 0;
	var sumaIac = 0;
	var sumaQuat = 0;
	var promedioAlcohol;
	var promedioIac;
	var promedioQuat;
	var sumaCombustible = 0;
	var sumaExplosivo = 0;
	var sumaIgnifugo = 0;
	var tipoMasUnidades;
	var sumaIacMenos200 = 0;
	var productoMasCaro;
	var marcaproductoMasCaro;
	var tipoProductoMasCaro;
	
	for (var i = 0 ; i < 2 ; i ++)
	{
		nombre = prompt ("Ingresar el nombre del producto");

		while (isNaN (nombre) == false)
		{
			nombre = prompt ("Producto inválido. Reingresar: ");
		}
		tipoProducto = prompt ('Ingresar el tipo de producto: ("alcohol", "iac", "quat")'); 

		while (tipoProducto != "alcohol" && tipoProducto != "iac" && tipoProducto != "quat" || isNaN (tipoProducto) == false) // no se pone isNan al pedir algo específico!!!
		{
			tipoProducto = prompt ('Tipo de producto inválido. Reingresar: ("alcohol", "iac", "quat")');
		}
		precio = prompt ("Ingresar el precio (entre 100 y 300)");
		precioParse = parseFloat (precio); // No usar parseFloat hasta el inicio de la carrera!!!

		while (precioParse < 100 || precioParse > 300 || isNaN (precioParse) == true) // Poner isNan al principio y no hace falta poner == true!!!
		{
			precioParse = parseFloat (prompt ("Precio inválido. Reingresar:"));
		}
		cantidadUnidades = prompt ("Ingresar la cantidad de unidades ( entre 1 a 1000)");
		cantidadUnidadesParse = parseInt (cantidadUnidades);

		while (cantidadUnidadesParse <= 0 || cantidadUnidadesParse > 1000 || isNaN (cantidadUnidadesParse) == true)
		{
			cantidadUnidadesParse = parseInt (prompt ("Cantidad inválida. Reingresar:"));
		}
		tipoInflamable = prompt ('Ingresar el tipo de inflamable: ("ignifugo", "combustible", "explosivo")');

		while (tipoInflamable != "ignifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo" || isNaN (tipoInflamable) == false)
		{
			tipoInflamable = prompt ('Tipo de inflamabe inválido. Reingresar: ("ignifugo", "combustible", "explosivo")');
		}
		marca = prompt ("Ingresar la marca del producto");
		
		while (isNaN(marca) == false)
		{
			marca = prompt ("Marca inválida. Reingresar:");
		}
		switch (tipoProducto)
		{
			case "alcohol":
				contadorAlcohol ++;
				sumaAlcohol += cantidadUnidadesParse;
			break;

			case "iac":
				contadorIac ++;
				sumaIac += cantidadUnidadesParse;

				if (precioParse <= 200)
				{
					sumaIacMenos200 += cantidadUnidadesParse;
				}
			break;

			case "quat":
				contadorQuat ++;
				sumaQuat += cantidadUnidadesParse;
			break;
		}
		switch (tipoInflamable)
		{
			case "combustible":
				sumaCombustible += cantidadUnidadesParse;
			break;

			case "explosivo":
				sumaExplosivo += cantidadUnidadesParse;
			break;

			case "ignifugo":
				sumaIgnifugo += cantidadUnidadesParse;
			break;
		}
		if (i == 0 || precioParse > productoMasCaro)
		{
			productoMasCaro = precioParse;
			marcaproductoMasCaro = marca;
			tipoProductoMasCaro = tipoProducto;
		}
	}
	/*promedioAlcohol = sumaAlcohol / contadorAlcohol; // Esto no!!!
	promedioIac = sumaIac / contadorIac;
	promedioQuat = sumaQuat / contadorQuat;

	if (contadorAlcohol == 0) 
	{
		promedioAlcohol = 0;
	}
	if (contadorIac == 0)
	{
		promedioIac = 0;
	}
	if (contadorQuat == 0)
	{
		promedioQuat = 0;
	}
	
	// Corrección:

	if (contadorAlcohol == 0)
	{
		promedioAlcohol = 0;
	}
	else
	{
		promedioAlcohol = sumaAlcohol / contadorAlcohol;
	}
	if (contadorIac == 0)
	{
		promedioIac = 0;
	}
	else
	{
		promedioIac = sumaIac / contadorIac;
	}
	if (contadorQuat == 0)
	{
		promedioQuat = 0;
	}
	else
	{
		promedioQuat = sumaQuat / contadorQuat;
	}

	if (sumaExplosivo > sumaCombustible && sumaExplosivo > sumaIgnifugo)
	{
		tipoMasUnidades = "Explosivo";
	}
	else
	{
		if (sumaCombustible > sumaIgnifugo)
		{
			tipoMasUnidades = "Combustible";
		}
		else
		{
			tipoMasUnidades = "Ignífugo";
		}
	}
	document.write ("a) El promedio de cantidad por tipo de producto es: "+ // Escribir siemrpre document.write al hacer un enter!!!
	"<br>. Alcohol: "+promedioAlcohol+
	"<br>. IAC: "+promedioIac+
	"<br>. QUAT: "+promedioQuat+
	"<br>b) El tipo de inflamables con mayor unidades en el total de la compra es: "+tipoMasUnidades+
	"<br>c) Unidades IAC con precio menor a 200 en total de la compra: "+sumaIacMenos200+
	"<br>d) Marca y tipo del más caro de los productos: "+marcaproductoMasCaro+", de tipo: "+tipoProductoMasCaro);*/

	var nombreProducto;
	var tipoProducto;
	var precio;
	var cantidadUnidades;
	var tipoInflamable;
	var marca;
	var contadorAlcohol = 0
	var acumuladorAlcohol = 0
	var contadorIac = 0
	var acumuladorIac = 0
	var contadorQuat = 0
	var acumuladorQuat = 0
	var promedioAlcohol;
	var promedioIac;
	var promedioQuat;
	var acumuladorIgnifugo = 0;
	var acumuladorCombustible = 0;
	var acumuladorExplosivo = 0;
	var acumuladorIacMenos200 = 0;
	var masCaroProductos;
	var tipoMasCaro;
	var marcaMasCaro

	for (var i = 0 ; i < 3; i++)
	{
		nombreProducto = prompt ("Ingresar el nombre del producto");

		while (isNaN (nombreProducto) == false)
		{
			nombreProducto = prompt ("Incorrecto. Reingresar:");
		}
		tipoProducto = prompt ("Ingresar el tipo de producto (alcohol/iac/quat)");

		while (tipoProducto != "alcohol" && tipoProducto != "iac" && tipoProducto != "quat")
		{
			tipoProducto = prompt ("Inválido. Reingresar: (alcohol/iac/quat)");
		}
		precio = prompt ("Ingresar el precio del producto (100 a 300)");
		precio = parseInt (precio);

		while (isNaN (precio) || precio < 100 || precio > 300)
		{
			precio = parseInt (prompt ("Inválido. Reingresar: (100 a 300"));
		}
		cantidadUnidades = parseInt (prompt ("Ingresar la cantidad de unidades (1 a 1000)"));

		while (isNaN (cantidadUnidades) || cantidadUnidades < 1 || cantidadUnidades > 1000)
		{
			cantidadUnidades = parseInt (prompt ("Inválido. Reingresar: (1 a 1000)"));
		}
		tipoInflamable = prompt ("Ingresar el tipo de inflamable (ignifugo/combustible/explosivo");

		while (tipoInflamable != "ignifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo")
		{
			tipoInflamable = prompt ("Inválido. Reingresar: (ignifugo/combustible/explosivo");
		}
		marca = prompt ("Ingresar la marca del producto");
		
		while (isNaN (marca) == false)
		{
			marca = prompt ("Inválido. Reingresar:");
		}
		switch (tipoProducto)
		{
			case "alcohol":
				contadorAlcohol ++;
				acumuladorAlcohol += cantidadUnidades;
			break;

			case "iac":
				contadorIac ++;
				acumuladorIac += cantidadUnidades;

				if (precio <= 200)
				{
					acumuladorIacMenos200 += cantidadUnidades;
				}
			break;	

			case "quat":
				contadorQuat ++;
				acumuladorQuat += cantidadUnidades;
			break;	
		}
		switch (tipoInflamable)
		{
			case "combustible":
				acumuladorCombustible += cantidadUnidades;
			break;

			case "explosivo":
				acumuladorExplosivo += cantidadUnidades;
			break;

			case "ignifugo":
				acumuladorIgnifugo += cantidadUnidades;
			break;
		}
		if (i == 0 || precio > masCaroProductos)
		{
			masCaroProductos = precio;
			marcaMasCaro = marca;
			tipoMasCaro = tipoProducto;
		}
	}
	if (contadorAlcohol == 0)
	{
		promedioAlcohol = 0;
	}
	else
	{
		promedioAlcohol = acumuladorAlcohol / contadorAlcohol;
	}
	if (contadorIac == 0)
	{
		promedioIac = 0;
	}
	else
	{
		promedioIac = acumuladorIac / contadorIac;
	}
	if (contadorQuat == 0)
	{
		promedioQuat = 0;
	}
	else
	{
		promedioQuat = acumuladorQuat / contadorQuat;
	}
	if (acumuladorCombustible > acumuladorExplosivo && acumuladorCombustible > acumuladorIgnifugo)
	{
		document.write ("b) El tipo de inflamable con mayor cantidad de undidades en el total de la compra es: Combustible<br>");
	}
	else
	{
		if (acumuladorExplosivo > acumuladorCombustible && acumuladorExplosivo > acumuladorIgnifugo)
		{
			document.write ("b) El tipo de inflamable con mayor cantidad de undidades en el total de la compra es: Explosivo<br>");
		}
		else
		{
			document.write ("b) El tipo de inflamable con mayor cantidad de undidades en el total de la compra es: Ignífugo<br>");
		}
	}
	document.write ("a) El promedio de cada tipo de producto es: Alcohol: "+promedioAlcohol+", IAC: "+promedioIac+", QUAT"+promedioQuat);
	document.write ("<br>c) Cantidad de unidades IAC con valor menor a $200: "+acumuladorIacMenos200);
	document.write ("<br>d) El más caro de los productos es: "+tipoMasCaro+", la marca: "+marcaMasCaro);
}
