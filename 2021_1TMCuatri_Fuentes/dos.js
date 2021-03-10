function mostrar()
{   
  var seguir = true;
  var nombre;
  var tipoCursada;
  var cantidadMaterias;
  var cantidadMateriasParse;
  var sexo;
  var nota;
  var notaParse;
  var edad;
  var edadParse;
  var flag = 0;
  var mejorPromedio;
  var nombreMejorPromedio;
  var flag2 = 0;
  var nombreLibreMasjoven;
  var libreMasJoven;
  var contadorMasculino = 0;
  var contadorFemenino = 0;
  var contadorNoBinario = 0;
  var sumaMaculino = 0;
  var sumaFemenino = 0;
  var sumaNoBinario = 0;
  var promedioMasculino;
  var promedioFemenino;
  var promedioNoBinario;
  var masMaterias;
  var nombreMayorMaterias;
  var edadMayorMaterias;
  var flag3 = 0;

    do
    {
      nombre = prompt ("Ingresar el nombre");

      while (isNaN (nombre) == false)
      {
        nombre = prompt ("Nombre inválido. Reingresar:");
      }
      tipoCursada = prompt ('Ingresar el tipo de cursada ("libre", "presencial", "remota")');

      while (tipoCursada != "libre" && tipoCursada != "presencial" && tipoCursada != "remota")
      {
        tipoCursada = prompt ('Tipo de cursada inválida. Reingresar: ("libre", "presencial", "remota")');
      }
      cantidadMaterias = prompt ("Ingresar cantidad de materias (entre 1 y 7)");
      cantidadMateriasParse = parseInt (cantidadMaterias);

      while (isNaN (cantidadMateriasParse) || cantidadMateriasParse < 1 ||cantidadMateriasParse > 7)
      {
        cantidadMateriasParse = parseInt (prompt ("Cantidad de materias inválidas. Reingresar:"));
      }
      sexo = prompt ('Ingresar el sexo ("femenino", "masculino", "no binario")');

      while (sexo != "femenino" && sexo != "masculino" && sexo != "no binario")
      {
        sexo = prompt ('Sexo incorrecto. Reingresar: ("femenino", "masculino", "no binario")');
      }
      nota = prompt ('Ingresar la nota promedio: (entre 0 y 10)');
      notaParse = parseFloat (nota); // No usar parseFloat hasta el inicio de la carrera!!!

      while (isNaN (notaParse) || notaParse <= 0 || notaParse >= 10)
      {
        notaParse = parseFloat (prompt ("Nota inválida. Reingresar: "));
      }
      edad = prompt ("Ingresar la edad");
      edadParse = parseInt (edad);

      while (isNaN (edadParse) || edadParse <= 0 || edadParse >= 100)
      {
        edadParse = parseInt (prompt ("Edad inválida. Reingresar:"));
      }
      if (sexo != "masculino")
      {
        if (flag == 0 || notaParse > mejorPromedio)
        {
          mejorPromedio = notaParse;
          nombreMejorPromedio = nombre;
          flag = 1;
        }
      }
      switch (tipoCursada)
      {
        case "libre":
          if (flag2 == 0 || edadParse < libreMasJoven)
          {
            libreMasjoven = edadParse;
            nombreLibreMasjoven = nombre;
            flag2 = 1;
          }
      }
      switch (sexo)
      {
        case "femenino":
          contadorFemenino ++;
          sumaFemenino += notaParse;
        break;

        case "masculino":
          contadorMasculino ++;
          sumaMaculino += notaParse;
        break;

        case "no binario":
          contadorNoBinario ++;
          sumaNoBinario += notaParse;
        break;
      }
      if (tipoCursada != "remota")
      {
        if (flag3 == 0 || cantidadMateriasParse > masMaterias)
        {
          masMaterias = cantidadMateriasParse;
          nombreMayorMaterias = nombre;
          edadMayorMaterias = edadParse;
          flag3 = 1;
        }
      }
    seguir = confirm ("¿Continuar ingresando?");

    }while (seguir);

    if (flag == 0)
    {
      nombreMejorPromedio = "No hay sexos diferentes a masculinos ingresados";
    }
    if (flag2 == 0)
    {
      nombreLibreMasjoven = "No hay alumnos asignados en la categoría (libre)";
    }
    if (flag3 == 0)
    {
      nombreMayorMaterias = "No hay alumnos ingresados distintos a cursada remota";
      edadMayorMaterias = "No hay alumnos ingresados distintos a cursada remota";
    }
    
    if (contadorFemenino == 0)
    {
      promedioFemenino = 0;
    }
    else
    {
      promedioFemenino = sumaFemenino / contadorFemenino;
    }
    if (contadorMasculino == 0)
    {
      promedioMasculino = 0;
    }
    else
    {
      promedioMasculino = sumaMaculino / contadorMasculino;
    }
    if (contadorNoBinario == 0)
    {
      promedioNoBinario = 0;
    }
    else
    {
      promedioNoBinario = sumaNoBinario / contadorNoBinario;
    }
   
    document.write ("a) El nombre del mejor promedio no masculino es: "+nombreMejorPromedio);
    document.write ("<br>b) El nombre del más joven que da libre es: "+nombreLibreMasjoven);
    document.write ("<br>d) . Masculino: "+promedioMasculino);
    document.write ("<br>. Femenino: "+promedioFemenino);
    document.write ("<br>. No binario: "+promedioNoBinario);
    document.write ("<br>f) Edad y sexo del que cursa más materias que no sea remota: "+edadMayorMaterias+" años, con el nombre: "+nombreMayorMaterias);
}
