function mostrar()
{
    /*var seguir = "s";
    var letra;
    var numero;
    var numeroParse;
    var contador = 0;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var sumaPositivos = 0;
    var promedio;
    var contadorPromedio = 0;
    var sumaNegativos = 0;
    var maximo;
    var minimo;
    var letraMaximo;
    var letraMinimo;
    var flag = 0;

    while (seguir == "s")
    {   
        letra = prompt ("Ingresar una letra");
        numero = prompt ("Ingresar un número entre -100 y 100");
        numeroParse = parseFloat (numero);
        
        if (numeroParse < -100 || numeroParse > 100)
        {
            alert ("El número no está dentro del rango establecido, vuelve a ingresar los números y las letras");
            flag = 1;
        }
        else
        {
           if (numeroParse == 0)
           {
               contadorCeros = contadorCeros + 1;
           }
           else
           {
               if (numeroParse >= -100 && numeroParse <= -1)
               {
                   sumaNegativos = sumaNegativos + numeroParse;
               }
               else
               {
                   if (numeroParse >= 1 && numeroParse <= 100)
                   {
                       sumaPositivos = sumaPositivos + numeroParse;
                       contadorPromedio = contadorPromedio + 1;
                   }
               }
           }
        }

        if (numeroParse % 2 == 0)
        {
            contadorPares = contadorPares + 1;
        }
        else
        {
            contadorImpares = contadorImpares + 1;
        }

        if (contador == 0)
        {
            maximo = numeroParse;
            minimo = numeroParse;
            letraMaximo = letra;
            letraMinimo = letra;
            contador = contador + 1;
        }
        else
        {
            if (numeroParse > maximo)
            {
                maximo = numeroParse;
                letraMaximo = letra;
            }
            else
            {
                if (numeroParse < minimo)
                {
                    minimo = numeroParse;
                    letraMinimo = letra;
                }
            }
        }
        
        if (flag == 1)
        {
            numeroParse = 0;
            maximo = 0;
            minimo = 0;
            contador = 0;
            contadorImpares = 0;
            contadorPares = 0;
            contadorCeros = 0;
            sumaNegativos = 0;
            sumaPositivos = 0;
            contadorPromedio = 0;
            flag = 0;
        }
        seguir = prompt ("Para continuar ingresar (s), de lo contrario ingresar cualquier otra cosa");
        
    }
        promedio = sumaPositivos / contadorPromedio;

        alert ("La cantidad de números pares es de: "+contadorPares);
        alert ("La cantidad de números impares es de: "+contadorImpares);
        alert ("La cantidad de ceros es de: "+contadorCeros);
        alert ("El promedio de los números positivos es de: "+promedio);
        alert ("La suma de los números negativos es de: "+sumaNegativos);
        alert ("El número máximo es: "+maximo+" y su letra es: "+letraMaximo);
        alert ("El número mínimo es: "+minimo+" y su letra es: "+letraMinimo);*/
  
        

    var seguir = true;
    var letra;
    var numero = 101;
    var numeroParse;
    var flag = 0;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var sumaPositivos = 0;
    var sumaNegativos = 0;
    var contadorPromedio = 0;
    var promedio;
    var maximo;
    var minimo;
    var letraMaximo;
    var letraMinimo;

    do
    {   while (numero < -100 || numero > 100)
        {
            numero = prompt ("Ingresar un número entre -100 y 100 inclusive");
            numeroParse = parseInt (numero);
            if (numero < -100 || numero > 100)
            {
                alert ("No es número que pertenezca al rango establecido");
            }
            flag = 1;
        }
        letra = prompt ("Ingresar una letra");
        if (numeroParse % 2 == 0)
        {
            contadorPares = contadorPares + 1;
        }
        else
        {
            contadorImpares = contadorImpares + 1;
        }
        
        if (flag == 1)
        {
            numero = 101;
        }

        seguir = confirm ("¿Continuar ingresando?");
    }while (seguir);
    alert (contadorImpares);
    alert (contadorPares);

}
