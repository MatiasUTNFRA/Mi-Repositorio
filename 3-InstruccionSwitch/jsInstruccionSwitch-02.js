function mostrar()
{
	var mes;
	
	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	//Se quita el codigo break para que siga comprobando hasta que vuelva a aparecer
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":

			alert("Falta para el invierno");
			break;

		case "Julio":
		case "Agosto":

			alert("Abrigate que hace frío");
			break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":

			alert("Ya pasó el frío");
			break;

	}




}