/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;
	
	nombre = document.getElementById("txtIdNombre").value;

	edad = document.getElementById("txtIdEdad").value;
//El operador + me sirve para concatenar caracteres de cadena con variables y biceversa
	alert("Usted se llama "+nombre+" y tiene "+edad+" años.");
//Metodo opcional usando template string con el back tick:
//alert(`usted se llama ${nombre} y tiene ${edad} años`);

	document.getElementById("txtIdNombre").value = ""
	document.getElementById("txtIdEdad").value = ""

}

