
function mostrar()
{
	var tipo;
	var precio;
	var precioParse;
	var unidades;
	var unidadesParse;
	var marca;
	var fabricante;
	var contadorBarbijos = 0;
	var contadorJabones = 0;
	var contadorAlcohol = 0;
	var acumuladorBarbijos = 0;
	var acumuladorJabones = 0;
	var acumuladorAlcohol = 0;
	var promedio;
	var precioAlcoholBarato;
	var unidadesAlcoholBarato;
	var fabricanteAlcoholBarato;
	var mayorTipo;
	var flagAlcohol = 0;

	for (var i = 0 ; i < 5 ; i++)
	{	
		tipo = prompt ('Ingresar el tipo de producto "barbijo", "jabon" o "alcohol": ');

		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol" || isNaN (tipo) == false)
		{
			tipo = prompt ("Tipo de producto inválido. Reingresar: ");
		}
		precio = prompt ("Ingresar el precio (entre 100 y 300)");
		precioParse = parseFloat (precio);

		while (precioParse < 100 || precioParse > 300 || isNaN (precioParse) == true)

		{
			precioParse = parseFloat (prompt ("Precio inválido. Reingresar"));
		}
		unidades = prompt ("Ingresar la cantidad de unidades (entre 1 a 1000)")		
		unidadesParse = parseInt (unidades)

		while (unidadesParse < 1 || unidadesParse > 1000 || isNaN (unidadesParse) == true)
		{
			unidadesParse = parseInt (prompt ("No es una cantidad válida. Reingresar"));
		}
		marca = prompt ("Ingresar la marca");

		while (isNaN (marca) == false)
		{
			marca = prompt ("No es una marca válida. Reingresar:");
		}
		fabricante = prompt ("Ingresar el fabricante");

		while (isNaN (fabricante) == false)
		{
			fabricante = prompt ("Fabricante inválido. Reingresar");
		}

		switch (tipo)
		{
			case "alcohol":
				acumuladorAlcohol += unidadesParse;
				contadorAlcohol++;
				if (flagAlcohol == 0 || precioParse < precioAlcoholBarato)
				{
					precioAlcoholBarato = precioParse;
					unidadesAlcoholBarato = unidadesParse;
					fabricanteAlcoholBarato = fabricante;
					flagAlcohol = 1;
				}


				break;
			case "barbijo":
				acumuladorBarbijos += unidadesParse;
				contadorBarbijos++;
				break;
			case "jabon":
				acumuladorJabones += unidadesParse;
				contadorJabones++;
				break;		
		}

	}
	if (acumuladorAlcohol > acumuladorBarbijos && acumuladorAlcohol > acumuladorJabones)
	{
		mayorTipo = "Alcohol";
		promedio = acumuladorAlcohol / contadorAlcohol;
	}
	else
	{
		if (acumuladorBarbijos >= acumuladorAlcohol && acumuladorBarbijos > acumuladorJabones)
		{
			mayorTipo = "Barbijos";
			promedio = acumuladorBarbijos / contadorBarbijos;
		}
		else
		{
			mayorTipo = "Jabones";
			promedio = acumuladorJabones / contadorJabones;
		}
	}
	if (flagAlcohol = 1)
	{
		alert ("A) . Cantidad de unidades del alcohol más barato: "+unidadesAlcoholBarato+
		"\n. Fabricante: "+fabricanteAlcoholBarato+
		"\n. Precio: $"+precioAlcoholBarato);
		
	}
	else
	{
		
	}
	alert ("B) El tipo de producto con mayor unidades es: "+mayorTipo+
	"\n. El promedio es de: "+promedio);
	alert ("C) La cantidad total de unidades de jabón es de: "+acumuladorJabones);
	
}
