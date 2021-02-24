function mostrar()
{
		var mayorEdad;
		var mayorEdadParse;


		mayorEdad = document.getElementById("txtIdEdad").value;
		
		mayorEdadParse = parseInt(mayorEdad);

		if (mayorEdadParse >= 18)
		{
			alert("Mayor de edad");
		}
		else
		{ 
			 alert("Menor de edad");
		}

}