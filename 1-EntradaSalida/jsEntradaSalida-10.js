/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let importeParse;
	let descuento;
	let resultado;

	importe = document.getElementById("txtIdImporte").value;

	importeParse = parseFloat(importe);

	descuento = importeParse * 25 / 100;

	resultado = importeParse - descuento;

	document.getElementById("txtIdResultado").value = resultado;
	

}
