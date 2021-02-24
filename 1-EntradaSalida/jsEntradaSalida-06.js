/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1;
	let num2;
	let num1Parse; //Es recomendable usar una variable dedicada para parsear para evitar futuros errores
	let num2Parse; 
	let resultado;
// Primero se copia el valor ingresado en la caja de texto para asignarla como variable
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
// Luego se convierte la variable dedicada a parsear a numero entero
	num1Parse = parseInt(num1);
	num2Parse = parseInt(num2);
// Realizo la operacion
	resultado = num1Parse + num2Parse;
//El mensaje que se muestra es de tipo string ya que string + number es string
	alert("La suma es "+resultado);
	document.getElementById("txtIdNumeroUno").value = ""
	document.getElementById("txtIdNumeroDos").value = ""
}

