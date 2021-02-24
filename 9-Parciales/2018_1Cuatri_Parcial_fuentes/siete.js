function mostrar()
{
    /*var nota;
    var notaParse;
    var sexo;
    var sexoNotaBaja;
    var alumnos = 0;
    var sumaNotas = 0;
    var promedio;
    var notaBaja;
    var contadorVarones = 0;
    var flag = 0;

    while (alumnos < 5)
    {
        nota = prompt ("Ingresar la nota");
        notaParse = parseFloat (nota);
        sexo = prompt ("Ingresar el sexo del alumno. (f) femenino o (m) masculino");

        if (notaParse < 0 || notaParse > 10)
        {
            alert ("No es una nota correcta");
            alert ("Vuela a ingresar las notas");
            flag = 1;
        }
        else
        {
            if (sexo != "f" && sexo != "m")
            {
                alert ("No es un sexo válido");
                alert ("Vuelva a ingresar las notas");
                flag = 1;
            }
            else
            {
                if (alumnos == 0)
                {
                    notaBaja = notaParse;
                    sexoNotaBaja = sexo;
                }
                else
                {
                    if (notaParse < notaBaja)
                    {
                        notaBaja = notaParse;
                        sexoNotaBaja = sexo;
                    }   
                }
            }
        }
        if (notaParse >= 6 && notaParse <= 10 && sexo == "m")
        {
            contadorVarones = contadorVarones + 1;
        }

        sumaNotas = sumaNotas + notaParse;

        if (flag == 0)
        {
            alumnos = alumnos + 1;
        }
        else
        {
            alumnos = 0;
            sumaNotas = 0;
            contadorVarones = 0;
        }
    }
    promedio = sumaNotas / 5;

    alert ("El promedio de las notas es de: "+promedio);
    alert ("La nota más baja es de: "+notaBaja+" y su sexo es: "+sexoNotaBaja);
    alert ("La cantidad de varones con nota mayor a 6 es de: "+contadorVarones);*/

    // Método con validaciones correctas

    var nota = 11;
    var notaParse;
    var sexo = "Ninguno";
    var alumnos = 0;
    var sexoNotaBaja;
    var sumaNotas = 0;
    var promedio;
    var notaBaja;
    var contadorVarones = 0;
    var flag = 0;

    while (alumnos < 5)
    {   while (nota < 0 || nota > 10)
        {
            nota = prompt ("Ingresar unan nota");
            notaParse = parseFloat (nota);
            flag = 1;
            if (notaParse < 0 || notaParse > 10)
            {
                alert ("No es una nota válida");
            }
        }
        while (sexo != "f" && sexo != "m")
        {
            sexo = prompt ("Ingresar el sexo");
            if (sexo != "f" && sexo != "m")
            {
                alert ("No es un sexo válido");               
            }
        }
        if (alumnos == 0)
        {
            notaBaja = notaParse;
            sexoNotaBaja = sexo;
        }
        else
        {
            if (notaParse < notaBaja)
            {
                notaBaja = notaParse;
                sexoNotaBaja = sexo;
            }
        }
        if (notaParse >= 6 && notaParse <= 10 && sexo == "m")
        {
            contadorVarones = contadorVarones + 1;
        }
        sumaNotas = sumaNotas + notaParse;
        alumnos = alumnos + 1;
        
        if (flag == 1)
        {
            nota = 11;
            sexo = "Ninguno";
        }
    }
    promedio = sumaNotas / 5;

    alert ("El promedio de las notas es de: "+promedio);
    alert ("La nota más baja es de: "+notaBaja+" y su sexo es: "+sexoNotaBaja);
    alert ("La cantidad de varones con nota mayor a 6 es de: "+contadorVarones);    
}
