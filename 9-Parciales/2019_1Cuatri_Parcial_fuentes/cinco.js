function mostrar()
{
    var continente;
    var cantDias;
    var cantDiasParse;
    var precio = 100;
    var formaPago;
    var descuento;
    var aumento;
    var precioFinal;

    continente = document.getElementById("Marca").value;

    cantDias = prompt ("Ingresar la cantidad de días que quiera quedarse");

    formaPago = prompt ("Medio de pago debito, mercadopago o efectivo");

    cantDiasParse = parseInt (cantDias);
    
    switch (continente)
    {
        case "América":
            switch (formaPago)
            {
                case "debito":
                     descuento = 60;  
                break;
                case "mercadopago":
                case "efectivo":    
                     descuento = 50;
                break;     
                default:
                    alert ("No es un medio de pago aceptado");     
            }
        break;

        case "África":
            switch (formaPago)
            {
                case "debito":
                     descuento = 60;  
                break;
                case "mercadopago":
                case "efectivo":    
                     descuento = 75;
                break;     
                default:
                    alert ("No es un medio de pago aceptado");     
            }
        break;

        case "Europa":
            switch (formaPago)
            {
                case "debito":
                     descuento = 35;  
                break;
                case "mercadopago":
                     descuento = 30;
                break;     
                case "efectivo":    
                     descuento = 25;
                break;     
                default:
                    alert ("No es un medio de pago aceptado");     
            }
        break;

        case "Asia":
            switch (formaPago)
            {
                case "debito":
                case "mercadopago":  
                case "efectivo":
                    aumento = 20;
                break;
                default:
                    alert ("No es un medio de pago aceptado");     
            }
        break;

        case "Oceania":
            switch (formaPago)
            {
                case "debito":
                case "mercadopago":  
                case "efectivo":
                    aumento = 20 
                break;
                default:
                    alert ("No es un medio de pago aceptado");     
            }
        break;     
    }
    if(descuento > 0)
    {
        precioFinal = (precio - precio * descuento / 100) * cantDiasParse;
    }
    else
    {
        precioFinal = (precio + precio * aumento / 100) * cantDiasParse;
    }
    
    alert ("Monto a pagar: $"+precioFinal);   
}
