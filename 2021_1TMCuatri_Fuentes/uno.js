
function mostrar()
{	
	var nombre;
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
	
	for (var i = 0 ; i < 5 ; i ++)
	{
		nombre = prompt ("Ingresar el nombre del producto");

		while (isNaN (nombre) == false)
		{
			nombre = prompt ("Producto inválido. Reingresar: ");
		}
		tipoProducto = prompt ('Ingresar el tipo de producto: ("alcohol", "iac", "quat")');

		while (tipoProducto != "alcohol" && tipoProducto != "iac" && tipoProducto != "quat" || isNaN (tipoProducto) == false)
		{
			tipoProducto = prompt ('Tipo de producto inválido. Reingresar: ("alcohol", "iac", "quat")');
		}
		precio = prompt ("Ingresar el precio (entre 100 y 300)");
		precioParse = parseFloat (precio);

		while (precioParse < 100 || precioParse > 300 || isNaN (precioParse) == true)
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
	promedioAlcohol = sumaAlcohol / contadorAlcohol;
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
	if (sumaExplosivo > sumaCombustible && sumaExplosivo > sumaIgnifugo)
	{
		tipoMasUnidades = "Explosivo";
	}
	else
	{
		if (sumaCombustible > sumaExplosivo && sumaCombustible > sumaIgnifugo)
		{
			tipoMasUnidades = "Combustible";
		}
		else
		{
			tipoMasUnidades = "Ignífugo";
		}
	}
	document.write ("a) El promedio de cantidad por tipo de producto es: "+
	"<br>. Alcohol: "+promedioAlcohol+
	"<br>. IAC: "+promedioIac+
	"<br>. QUAT: "+promedioQuat+
	"<br>b) El tipo de inflamables con mayor unidades en el total de la compra es: "+tipoMasUnidades+
	"<br>c) Unidades IAC con precio menor a 200 en total de la compra: "+sumaIacMenos200+
	"<br>d) Marca y tipo del más caro de los productos: "+marcaproductoMasCaro+", de tipo: "+tipoProductoMasCaro);


}
