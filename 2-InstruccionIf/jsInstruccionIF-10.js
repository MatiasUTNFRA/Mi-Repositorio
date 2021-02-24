function mostrar()
{
	var nota;
	var maximo = 10;
	var minimo = 1;

	nota = Math.round(Math.random() * (maximo - minimo) + minimo);

	if(nota >= 9)
	{
		alert("Nota: "+nota+" Excelente");

	}
		else if(nota >= 4 && nota <= 8)
		{
			alert("Nota: "+nota+" Aprobado");
		}
	else
	{
		alert("Nota: "+nota+" Vamos, la próxima se puede");
	}
}