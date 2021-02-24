function mostrar()
{
	var hora;
	var horaParse;

	hora = document.getElementById("txtIdHora").value;

	horaParse = parseInt(hora);

	switch(horaParse)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
		break;

	}
	
	



}