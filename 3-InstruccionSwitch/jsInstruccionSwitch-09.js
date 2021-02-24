function mostrar()
{
	var estacion;
	var destino;
	var precioBase = 15000;
	var aumento;
	var descuento;
	var precioDescuento;
	var precioAumento;
	var precioFinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById ("txtIdDestino").value;

// Metodo alternativo utilizando solo switch
	switch (estacion)
	{
		case "Invierno":
			switch (destino)
			{
				case "Bariloche":
					aumento = 20;
				break;
				case "Mar del plata":
					descuento = 20;
					break;	
				default:
					descuento = 10;				
			}
		break;
		
		case "Verano":
			switch (destino)
			{
				case "Bariloche":
					descuento = 20;
				break;	
				case "Mar del plata":
					aumento = 20;
				break;
				default:
					aumento = 10;
			}
		break;
		
		case "Otoño":
		case "Primavera":
			switch (destino)
			{
				case "Cordoba":
				aumento = 0;
				descuento = 0;
				break;
				default:
				aumento = 10;
			}
		break;	
	}

	/*switch (estacion)
	{
		case "Invierno":
			if (destino == "Bariloche")
			{
				aumento = 20;
			}
			else
			{
				if (destino == "Mar del plata")
				{
					descuento = 20;
				}
				else
				{
					descuento = 10;
				}
			}
		break;

		case "Verano":
			if (destino == "Bariloche")
			{
				descuento = 20;
			}
			else
			{
				if (destino == "Mar del plata")
				{
					aumento = 20;
				}
				else
				{
					aumento = 10;
				}
			}
		break;

		case "Otoño":			
		case "Primavera":	
			if (destino == "Cordoba")
			{
				descuento = 0;
				aumento = 0;
			}
			else
			{
				aumento = 10;
			}
		break;

	}
	/*precioDescuento =  precioBase - precioBase * descuento / 100;
	precioAumento = precioBase + precioBase * aumento / 100;

	if (precioAumento >= 0)
	{
		alert ("Monto final: "+precioAumento);
	}	
	else 
	{
		alert ("Monto final: "+precioDescuento);
	}*/
	
// Metodo mas pulido, ahorrando cuentas y variables
	if (aumento >= 1)
	{
		precioFinal = precioBase + precioBase * aumento / 100;
	}
	else
	{
		if (descuento >= 1)
		{
			precioFinal = precioBase - precioBase * descuento / 100;
		}
		else
		{
			precioFinal = precioBase;
		}
	}

	alert ("Monto a pagar: $"+precioFinal);

}
	

