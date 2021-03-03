function mostrar()
{
    var color;
    var precio;
    var precioParse;
    var seguir = true;
    var contadorRojos = 0;
    var contadorRojosMas5000 = 0;
    var contadorMenor5000 = 0;
    var contador = 0;
    var suma = 0;
    var promedio;
    var mayorPrecio;
    var colorMayorPrecio;

    do
    {
        color = prompt ('Ingresar el color del auto ("rojo", "verde", "amarillo")');

        while (color != "rojo" && color != "verde" && color != "amarillo" || isNaN (color) == false)
        {
            color = prompt ('Color inválido. Reingresar: ("rojo", "verde", "amarillo"');
        }
        precio = prompt ("Ingresar el precio (entre 0 y 10000)");
        precioParse = parseFloat (precio);

        while (precioParse < 0 || precioParse > 10000 || isNaN (precioParse) == true)
        {
            precioParse = parseFloat (prompt ("No es un precio válido. Reingresar: (entre 0 y 10000)"));
        }
        if (color == "rojo")
        {    
            contadorRojos ++;
        }
        if (color == "rojo" && precioParse > 5000)
        {
            contadorRojosMas5000 ++;
        }
        if (precioParse < 5000)
        {
            contadorMenor5000 ++;
        }
        if (contador == 0 || precioParse > mayorPrecio)
        {
            mayorPrecio = precioParse;
            colorMayorPrecio = color;
        }
        contador ++;
        suma += precioParse;

        seguir = confirm ("¿Continuar ingresando?");

    }while (seguir);

    promedio = suma / contador;

    document.write ("a) La cantidad de autos de color rojo es de: "+contadorRojos+
    "<br>b) La cantidad de autos rojos con un valor mayor a $5000 es de: "+contadorRojosMas5000+
    "<br>c) La cantidad de autos con un precio inferior a $5000 es de: "+contadorMenor5000+
    "<br>d) El promedio entre todos los autos ingresados es de: "+promedio+
    "<br>e) El precio más caro de los autos es de: $"+mayorPrecio+", de color: "+colorMayorPrecio);
}
