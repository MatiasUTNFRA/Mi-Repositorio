function mostrar()
{
	var mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":	
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":

			alert("Este mes tiene 30 o más días");
			break;
			
		case "Febrero":

			alert("Este mes no tiene más de 29 días");
			break;
	}	
	//Metodo opcional con default

	/*switch(mes)
	{
		case "Febrero":

			alert("Este mes no tiene más de 29 días");
			break
		
		default:
			
			alert("Este mes tiene 30 días o más");
	}*/

	//Metodo opcional con if

	/*if (mes == "Febrero")
	{
		alert("Este mes no tiene más de 29 días");

	}

	else
	{
		alert("Este mes tiene 30 o más días");

	}*/

}