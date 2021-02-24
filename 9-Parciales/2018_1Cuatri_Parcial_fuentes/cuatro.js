function mostrar()
{
    var num1;
    var num1Parse;
    var num2;
    var num2Parse;
    var suma;
    var resta;

    num1 = prompt("Ingresar el primer número");
    num2 = prompt("Ingresar el segundo número");

    num1Parse = parseInt(num1);
    num2Parse = parseInt(num2);

    suma = num1Parse + num2Parse;
    resta = num1Parse - num2Parse;

    // Metodo con else if
    if(num1Parse == num2Parse)
    {   
        alert(+num1Parse+""+num2Parse);
    }

        else if(num1Parse > num2Parse)
        {
            alert(resta);
        }

        else if(suma > 10)
        {
            alert("La suma es "+suma+" y superó el 10");
        }

    else
    {
        alert(suma);
    }

    // Metodo con if, else
    /*if(num1Parse == num2Parse)
    {   
        alert(+num1Parse+""+num2Parse);
    }
    else
    {
        if (num1Parse > num2Parse)
        {
            alert(resta);
        }
        else
        {
            if (suma > 10)
            {
                alert("La suma es "+suma+" y superó el 10");
            }
            else
            {
                alert(suma);
            }
        }

        
    }*/


}       
