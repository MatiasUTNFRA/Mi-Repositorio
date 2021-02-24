function mostrar()
{
    let precio;
    let precioParse;
    let descuentoParse;
    let descuento;
    let preciodescuento;
    let resultado;

    precio = prompt("Ingresar el precio del producto");
    descuento = prompt("Ingresar su descuento");

    precioParse = parseFloat(precio);
    descuentoParse = parseInt(descuento);

    preciodescuento = precioParse * descuentoParse / 100;

    resultado = precioParse - preciodescuento;

    document.getElementById("elPrecioFinal").value = resultado;


    



}
