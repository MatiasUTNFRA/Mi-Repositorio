function mostrar()
{
    var pais;
    var cantHabitantes;
    var cantHabitantesParse;
    var temperaturaMinima;
    var temperaturaMinimaParse;
    var seguir = true;
    var contadorTempPares = 0;
    var nombrePaisMenosHab;
    var contadorPaisesGrados = 0;
    var sumaHabitantes = 0;
    var promedioHabitantes = 0;
    var menorTemperatura;
    var nombrePaisMenorTemp;
    var nombrePaisMenosHab;
    var menorHabitantes;
    var contadorPromedio = 0;
    
    do
    {
        pais = prompt ("Ingresar un país");

        while (isNaN (pais) == false)
        {
            pais = prompt ("No es un país válido. Reingresar:");
        }
        cantHabitantes = prompt ("Ingresar la cantidad de habitantes por millón (Entre 1 y 7000)");
        cantHabitantesParse = parseInt (cantHabitantes);

        while (cantHabitantesParse < 1 || cantHabitantesParse > 7000 || isNaN (cantHabitantesParse) == true)
        {
            cantHabitantesParse = parseInt (prompt ("No es una cantidad válida. Debe ser entre 1 y 7000"));
        }
        temperaturaMinima = prompt ("Ingresar la temperatura mínima del país. (Debe ser entre -50° y 50°)");
        temperaturaMinimaParse = parseInt (temperaturaMinima);

        while (temperaturaMinimaParse < -50 || temperaturaMinimaParse > 50 || isNaN (temperaturaMinimaParse) == true)
        {
            temperaturaMinimaParse = parseInt (prompt ("No es una temperatura válida. Debe ser entre -50° y 50°"));
        }
        if (temperaturaMinimaParse % 2 == 0)
        {
            contadorTempPares ++;
        }
        if (contadorPromedio == 0 || cantHabitantesParse < menorHabitantes)
        {
            menorHabitantes = cantHabitantesParse;
            nombrePaisMenosHab = pais;
        }
        if (temperaturaMinimaParse > 40)
        {
            contadorPaisesGrados ++;
        }
        if (contadorPromedio == 0 || temperaturaMinimaParse < menorTemperatura)
        {
            menorTemperatura = temperaturaMinimaParse;
            nombrePaisMenorTemp = pais;
        }
        sumaHabitantes += cantHabitantesParse;
        contadorPromedio ++;

        seguir = confirm ("¿Continuar ingresando?");

    }while (seguir);

    promedioHabitantes = sumaHabitantes / contadorPromedio;

    document.write ("a) La cantidad de temperaturas pares registradas es de: "+contadorTempPares+
    "<br>b) El nombre del país con menos cantidad de habitantes es: "+nombrePaisMenosHab+", con una cantidad de: "+menorHabitantes+" millones"+
    "<br>c) La cantidad de países que superan los 40° es de: "+contadorPaisesGrados+
    "<br>d) El promedio de habitantes entre los países ingresados es de: "+promedioHabitantes+
    "<br>e) El nombre del país con la menor temperatura es: "+nombrePaisMenorTemp+", con una temperatura de: "+menorTemperatura+"°");

}
