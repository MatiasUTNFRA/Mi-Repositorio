/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1;
	let num2;
	let num1Parse;
	let num2Parse;
	let resultado;

num1 = document.getElementById("txtIdNumeroUno").value;

num2 = document.getElementById("txtIdNumeroDos").value;

num1Parse = parseInt(num1);
num2Parse = parseInt(num2);

resultado = num1Parse + num2Parse;

alert("La suma es "+resultado);
document.getElementById("txtIdNumeroUno").value = ""
document.getElementById("txtIdNumeroDos").value = ""
}

function restar()
{	let num1;
	let num2;
	let num1Parse;
	let num2Parse;
	let resultado;

num1 = document.getElementById("txtIdNumeroUno").value;

num2 = document.getElementById("txtIdNumeroDos").value;

num1Parse = parseInt(num1);
num2Parse = parseInt(num2);

resultado = num1Parse - num2Parse;

alert("La resta es "+resultado);
document.getElementById("txtIdNumeroUno").value = ""
document.getElementById("txtIdNumeroDos").value = ""
}

function multiplicar()
{ 	let num1;
	let num2;
	let num1Parse;
	let num2Parse;
	let resultado;

num1 = document.getElementById("txtIdNumeroUno").value;

num2 = document.getElementById("txtIdNumeroDos").value;

num1Parse = parseInt(num1);
num2Parse = parseInt(num2);

resultado = num1Parse * num2Parse;

alert("La multiplicación es "+resultado);
document.getElementById("txtIdNumeroUno").value = ""
document.getElementById("txtIdNumeroDos").value = ""
}

function dividir()
{	let num1;
	let num2;
	let num1Parse;
	let num2Parse;
	let resultado;

num1 = document.getElementById("txtIdNumeroUno").value;
num2 = document.getElementById("txtIdNumeroDos").value;

num1Parse = parseInt(num1);
num2Parse = parseInt(num2);

resultado = num1Parse / num2Parse;

alert("La división es "+resultado);
document.getElementById("txtIdNumeroUno").value = ""
document.getElementById("txtIdNumeroDos").value = ""
}

