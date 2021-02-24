/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let num1;
	let num2;
	let num1Parse;
	let num2Parse;
	let resultado;

num1 = document.getElementById("txtIdNumeroDividendo").value;
num2 = document.getElementById("txtIdNumeroDivisor").value;

num1Parse = parseInt(num1);
num2Parse = parseInt(num2);
//Va a devolver el resto de la division.

resultado = num1Parse % num2Parse;

alert("El resto es "+resultado);
document.getElementById("txtIdNumeroDividendo").value = ""
document.getElementById("txtIdNumeroDivisor").value = ""
}
