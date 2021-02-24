function mostrar()
{
    var precio;
    var precioParse;
    var descuento;
    var descuentoParse;
    var precioFinal;

    precio = prompt ("Ingresar el precio del producto");
    descuento = prompt ("Ingresar el porcentaje de descuento del mismo");
    precioParse = parseInt (precio);
    descuentoParse = parseInt (descuento);

    descuentoParse = precioParse * descuentoParse / 100;

    precioFinal = precioParse - descuentoParse;

    document.getElementById("elPrecioFinal").value = precioFinal;
}
