function mostrar()
{
    var num1;
    var num2;
    var resultado = 0;

    num1 = parseInt (prompt ("Ingresar el primer número"));
    num2 = parseInt (prompt ("Ingresar el segundo número"));
    
    if (num1 == num2)
    {
        resultado = num1 * num1;
    }
    else
    {
        if (num1 % num2 == 0)
        {
            resultado = num1 - num2;
        }
        else
        {
            if (num1 % num2 > 3)
            {
                alert ("El resto es superior a 3");
            }
            else
            {
                resultado = num1 % num2;
            }
        }
    }
    alert ("El resultado es: "+resultado);
}
