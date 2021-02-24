function mostrar()
{
	var numero;
	var maximo = 100;
	var minimo = 1;

	numero = Math.round(Math.random() * (maximo - minimo) + minimo);
	
	if (numero >= 1 && numero <= 10)
	{
		alert(numero);
		
	}
	
}