/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let sueldoParse;
	let aumento;
	let nuevosueldo;

	sueldo = document.getElementById("txtIdSueldo").value;
//parsefloat para numeros decimales
	sueldoParse = parseFloat(sueldo);
//realizo el porcentaje del 10%, siempre es recomendable realizarlo con regla de 3
	aumento = sueldoParse * 10 / 100;
//Aplico el aumento
	nuevosueldo = sueldoParse + aumento;

	document.getElementById("txtIdResultado").value = nuevosueldo

	
}
