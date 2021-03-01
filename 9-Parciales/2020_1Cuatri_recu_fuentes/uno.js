
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
	var precioJabonCaro;
	var unidadesJabonCaro;
	var fabricanteJabonCaro;
	var mayorTipo;

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
		contadorAlcohol ++;

      break;
      case "barbijo":
        acumuladorBarbijos += unidadesParse;
		contadorBarbijos ++;

      break;
      case "jabon":
        if (contadorJabones == 0 || precioParse > precioJabonCaro)
		{
			precioJabonCaro = precioParse;
			unidadesJabonCaro = unidadesParse;
			fabricanteJabonCaro = fabricante;
		}
		acumuladorJabones += unidadesParse;
		contadorJabones ++;
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
	if (contadorJabones == 0)
	{
		precioJabonCaro = 0;
		unidadesJabonCaro = 0;
		fabricanteJabonCaro = "Ninguno";
	}
	document.write ("a) Del más caro de los jabones: "+
	"<br> . La cantidad de unidades es de: "+unidadesJabonCaro+
	"<br>. El fabricante es: "+fabricanteJabonCaro+
	"<br>. El precio es: $"+precioJabonCaro+
	"<br>b) El producto con más unidades es: "+mayorTipo+", con un promedio de: "+promedio+
	"<br>c) La cantidad de unidades de barbijos que se compraron en total es de: "+acumuladorBarbijos);
}
