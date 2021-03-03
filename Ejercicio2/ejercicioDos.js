
function probarEjercicio(){
	var continente;
    var pais;
    var habitantes;
    var habitantesParse;
    var pobreza;
    var temperatura;
    var temperaturaParse;
    var contadorTempPares = 0;
    var contadorTempImparesEuropa = 0;
    var menorHabitantes;
    var nombreMenorHabitantes;
    var contadorMas40 = 0;
    var contadorAmericaMenos0 = 0;
    var sumaHabitantes = 0;
    var promedioHabitantes;
    var sumaHabitantesMas40 = 0;
    var promedioHabitantesMas40 = 0;
    var flag = 0;
    var temperaturaMinima;
    var nombreTempMinima;
    var masHabitantes;
    var continenteMasHabitantes;

    for (var i = 0 ; i < 5 ; i++)
    {
        continente = prompt ("Ingresar el continente");
        
        while (continente != "america" && continente != "asia" && continente != "europa" && continente != "africa" && continente != "oceania" || isNaN (continente) == false)
        {
            continente = prompt ("Reingresar el continente");
        }
        if (continente == "europa")
        {
            pobreza = prompt ('Ingresar el nivel de pobreza ("rico", "muy rico")');

            while (pobreza != "rico" && pobreza != "muy rico" || isNaN (pobreza) == false)
            {
                pobreza = prompt ('Reingresar el nivel de pobreza: ("rico", "muy rico")');
            }
            pais = prompt ("Ingresar el pais");

            while (isNaN (pais) == false)
            {
                pais = prompt ("Reingresar el pais");
            }
            habitantes = prompt ("Ingresar la cantidad de habitantes (entre 1 y 7000)");
            habitantesParse = parseInt (habitantes);

            while (habitantesParse < 1 || habitantesParse > 7000 || isNaN(habitantesParse) == true)
            {
                habitantesParse = parseInt (prompt ("Cantidad inválida"));
            }
            temperatura = prompt ('Ingresar la temperatura mínima: (entre -50 y 50°)');
            temperaturaParse = parseInt (temperatura);

            while (temperaturaParse < -50 || temperaturaParse > 50 || isNaN (temperaturaParse) == true)
            {
                temperaturaParse = parseInt (prompt ("Temperatura inválida. Reingresar:"));
            }

        }
        else
        {
            pais = prompt ("Ingresar el pais");

            while (isNaN (pais) == false)
            {
                pais = prompt ("Reingresar el pais");
            }
            habitantes = prompt ("Ingresar la cantidad de habitantes (entre 1 y 7000)");
            habitantesParse = parseInt (habitantes);

            while (habitantesParse < 1 || habitantesParse > 7000 || isNaN(habitantesParse) == true)
            {
                habitantesParse = parseInt (prompt ("Cantidad inválida"));
            }
            pobreza = prompt ('Ingresar el nivel de pobreza ("pobre", "rico", "muy rico")');

            while (pobreza != "pobre" && pobreza != "rico" && pobreza != "muy rico" || isNaN (pobreza) == false)
            {
                pobreza = prompt ('Reingresar el nivel de pobreza: ("pobre" "rico", "muy rico")');
            }
            temperatura = prompt ('Ingresar la temperatura mínima: (entre -50 y 50°)');
            temperaturaParse = parseInt (temperatura);

            while (temperaturaParse < -50 || temperaturaParse > 50 || isNaN (temperaturaParse) == true)
            {
                temperaturaParse = parseInt (prompt ("Temperatura inválida. Reingresar:"));
            }
        }
        if (temperaturaParse % 2 == 0)
        {
            contadorTempPares ++;
        }
        if (continente == "europa" && temperaturaParse % 2 != 0)
        {
            contadorTempImparesEuropa ++;
        }
        if (i == 0 || habitantesParse < menorHabitantes)
        {
            menorHabitantes = habitantesParse;
            nombreMenorHabitantes = pais;
        }
        if (temperaturaParse > 40)
        {
            contadorMas40 ++;
            sumaHabitantesMas40 += habitantesParse;
            flag = 1;
        }
        if (continente == "america" && temperaturaParse < 0)
        {
            contadorAmericaMenos0 ++;
        }
        sumaHabitantes += habitantesParse;

        if (i == 0 || temperaturaParse < temperaturaMinima)
        {
            temperaturaMinima = temperaturaParse;
            nombreTempMinima = pais;
        }
        if (i == 0 || habitantesParse > masHabitantes)
        {
            masHabitantes = habitantesParse;
            continenteMasHabitantes = continente;
        }
    }
    promedioHabitantesMas40 = sumaHabitantesMas40 / i;
    promedioHabitantes = sumaHabitantes / i;
    if (flag == 0)
    {
        promedioHabitantesMas40 = 0;
    }
    document.write ("a) La cantidad de temperaturas pares es de: "+contadorTempPares+
    "<br>b) La cantidad de temperaturas impares en europa es de: "+contadorTempImparesEuropa+
    "<br>c) El país con menos habitantes es: "+nombreMenorHabitantes+
    "<br>d) La cantidad de países que superan los 40° es de: "+contadorMas40+
    "<br>e) La cantidad de países de América que tienen menos de 0° es de: "+contadorAmericaMenos0+
    "<br>f) El promedio de habitantes entre los países ingresados es de: "+promedioHabitantes+
    "<br>g) El promedio de habitantes entre los países que superan los 40° es de: "+promedioHabitantesMas40+
    "<br>h) La temperatura mínima registrada es de: °"+temperaturaMinima+", del país: "+nombreTempMinima+
    "<br>i) El continente con más habitantes es: "+continenteMasHabitantes);
}