/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre

	nombre = document.getElementById("txtIdNombre").value;//value porque de la caja de texto quiero el valor
					//funcion que me permite ir a buscar la id asignada en el html
	alert(nombre);

	//nombre = txtIdNombre.value --> Se puede escribir asi ya que el navegador Chrome asigna una variable una vez escrita en el html
	//                           --> En JavaScript no es una forma correcta de notacion

	document.getElementById("txtIdNombre").value = "";//Vaciamos la caja de texto para que no quede escrito el valor anterior

}


