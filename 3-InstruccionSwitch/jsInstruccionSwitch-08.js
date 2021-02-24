function mostrar()
{
	var destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
		case "Mar del plata":
			alert("Hace frío");
			break;

		default:
			alert("Hace calor");	
			
	}

}