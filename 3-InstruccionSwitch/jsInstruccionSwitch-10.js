function mostrar()
{
	var estacion;
	var destino;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById ("txtIdDestino").value;


	switch (estacion)
	{
		case "Invierno":
			switch (destino)
			{
				case "Bariloche":
				alert ("Se viaja");
				break;

				default:
				alert ("No se viaja");
			}
		break;
		
		case "Verano":
			switch (destino)
			{
				case "Cataratas":
				case "Mar del plata":
				alert ("Se viaja");
				break;

				default:
				alert ("No se viaja");
			}
		break;
		
		case "Otoño":
			alert ("Se viaja");
		break;
		
		case "Primavera":
			switch (destino)
			{
				case "Bariloche":
					alert ("No se viaja");
				break;
				
				default:
				alert ("Se viaja");	
			}
		break;	
	}

// Metodo alternativo combinando switch con if
	/*switch (estacion)
	{
		case "Invierno":
			if (destino == "Bariloche")
			{
				alert ("Se viaja");
			}
			else
			{
				alert ("No se viaja");
			}
		break;

		case "Verano":
			if (destino == "Cataratas" || destino == "Mar del plata")
			{
				alert ("Se viaja");
			}
			else
			{
				alert ("No se viaja");
			}
		break;

		case "Otoño":	
				alert ("Se viaja");
		break;

		case "Primavera":	
			if (destino == "Bariloche")
			{
				alert ("No se viaja");
			}
			else
			{
				alert ("Se viaja");
			}
		break;
	}	*/				
}