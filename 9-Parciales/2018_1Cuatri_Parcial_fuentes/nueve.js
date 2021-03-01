function mostrar()
{
    var marca;
    var peso;
    var pesoParse;
    var temperatura;
    var temperaturaParse;
    var seguir = true;
    var maximoPeso;
    var minimoPeso;
    var marcaMasPesado;
    var contadorPares = 0;
    var contadorBajoCero = 0;
    var acumuladorPeso = 0;
    var contadorPromedio = 0;
    var promedioPeso = 0;
    var flagPeso = 0;

    do
    {
        marca = prompt ("Ingresar la marca del producto");
        
        while (isNaN(marca) == false)
        {
            marca = prompt ("No es un producto válido. Reingresar");
        }
        peso = prompt ("Ingresar el peso del mismo: (solo desde 1kg a 100kg)");
        pesoParse = parseFloat (peso);

        while (pesoParse < 1 || pesoParse > 100 || isNaN (pesoParse) == true)
        {
            pesoParse = parseFloat (prompt ("Peso no vállido. Debe ser entre 1kg y 100kg"));
        }
        temperatura = prompt ("Ingresar la temperatura de almacenamiento: (solo desde -30° a 30°)");
        temperaturaParse = parseInt (temperatura);

        while (temperaturaParse < -30 || temperaturaParse > 30 || isNaN (temperaturaParse) == true)
        {
            temperaturaParse = parseInt (prompt ("Temperatura inválida. Debe ser entre -30° y 30°"));
        }
        console.log (pesoParse);
        if (temperaturaParse % 2 == 0)
        {
            contadorPares ++;
        }
        if (flagPeso == 0 || pesoParse > maximoPeso)
        {
            maximoPeso = pesoParse;
            minimoPeso = pesoParse;
            marcaMasPesado = marca;
            flagPeso = 1;
        }
        else
        {
            if (pesoParse < minimoPeso)
            {
                minimoPeso = pesoParse;
            }
        }
        if (temperaturaParse < 0)
        {
            contadorBajoCero ++;
        }
        acumuladorPeso += pesoParse;
        contadorPromedio ++;
        
        seguir = confirm ("¿Continuar ingresando?");

    }while (seguir);

    promedioPeso = acumuladorPeso / contadorPromedio;

    document.write ("a) La cantidad de temperaturas pares es de: "+contadorPares+
    "<br>b) La marca del producto más pesado es: "+marcaMasPesado+
    "<br>c) La cantidad de productos que se conservan a temperatura bajo cero es de: "+contadorBajoCero+
    "<br>d) El promedio del peso de todos los productos ingresados es de: "+promedioPeso+
    "<br>e). El peso máximo ingresado es de: "+maximoPeso+"kg."+
    "<br>. El peso mínimo ingresado es de: "+minimoPeso+"kg.");
}
