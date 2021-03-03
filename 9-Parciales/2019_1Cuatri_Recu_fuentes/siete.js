function mostrar()
{
    var kilos;
    var kilosParse;
    var sabor;
    var contadorKilos = 0;
    var sumaKilos = 0;
    var promedioKilos;
    var masLiviano;
    var saborMasLiviano;
    var contadorSaborCarne = 0;
    var sumaSaborCarne = 0;
    var promedioSaborCarne;

    for (i = 0 ; i < 10 ; i ++)
    {
        kilos = prompt ("Ingresar la cantidad de kilogramos (entre 1 y 500)");
        kilosParse= parseFloat (kilos);

        while (kilosParse < 1 || kilosParse > 500 || isNaN (kilosParse) == true)
        {
            kilosParse = parseFloat (prompt ("Dato inválido. Reingresar: (entre 1 y 500)"));
        }
        sabor = prompt ('Ingresar el sabor ("carne", "vegetales", "pollo")');

        while (sabor != "carne" && sabor != "vegetales" && sabor != "pollo" || isNaN (sabor) == false)
        {
            sabor = prompt ('Dato inválido. Reingresar: ("carne", "vegetales", "pollo")');
        }
        contadorKilos ++;
        sumaKilos += kilosParse;

        if (i == 0 || kilosParse < masLiviano)
        {
            masLiviano = kilosParse;
            saborMasLiviano = sabor;
        }
        if (sabor == "carne")
        {
            contadorSaborCarne ++;
            sumaSaborCarne += kilosParse;
        }
    }
    promedioKilos = sumaKilos / contadorKilos;

    promedioSaborCarne = sumaSaborCarne / contadorSaborCarne;

    if (contadorSaborCarne == 0)
    {
        promedioSaborCarne = 0;
    }
    document.write ("a) El promedio de los kilos totales es de: "+promedioKilos+
    "<br>b) El más liviano es: "+saborMasLiviano+", con un peso de: "+masLiviano+"kg."+
    "<br>c) La cantidad de sabor carne ingresada es de: "+contadorSaborCarne+", y su promedio es de: "+promedioSaborCarne);

}
