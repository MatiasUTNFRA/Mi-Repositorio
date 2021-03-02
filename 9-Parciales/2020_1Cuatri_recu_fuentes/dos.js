function mostrar()
{
    var tipo;
    var cantidadBolsas;
    var cantidadBolsasParse;
    var precioBolsa;
    var precioBolsaParse;
    var descuento;
    var acumuladorPrecio = 0;
    var acumuladorBolsas = 0;
    var importeSinDescuento;
    var importeConDescuento;
    var seguir = true;
    var sumaBolsasCal = 0;
    var sumaBolsasArena = 0;
    var sumaBolsasCemento = 0;
    var nombreMayorTipo;
    var cantidadMayorTipo;
    var flag = 0;
    var precioMayorTipo;
    var nombreTipoMasCaro;
    
    do
    {
      tipo = prompt ('Ingresar el tipo de producto ("arena", "cal" o "cemento")');
  
      while (tipo != "arena" && tipo != "cal" && tipo != "cemento" || isNaN (tipo) == false)
      {
        tipo = prompt ("Tipo de producto inválido. Reingresar:");
      }
      cantidadBolsas = prompt ("Ingresar la cantidad de bolsas");
      cantidadBolsasParse = parseInt (cantidadBolsas);
  
      while (cantidadBolsasParse <= 0 || isNaN (cantidadBolsasParse) == true)
      {
        cantidadBolsasParse = parseInt (prompt ("Cantidad de bolsas inválidas. Reingresar:"));
      }
      precioBolsa = prompt ("Ingresa el precio de la bolsa");
      precioBolsaParse = parseInt (precioBolsa);
  
      while (precioBolsaParse <= 0 || isNaN (precioBolsaParse) == true)
      {
        precioBolsaParse = parseInt (prompt ("Precio inválido. Reingresar:"));
      }
      acumuladorPrecio += precioBolsaParse;
      acumuladorBolsas += cantidadBolsasParse;
  
      switch (tipo)
      {
        case "arena":

          sumaBolsasArena += cantidadBolsasParse;

        break;
  
        case "cal":

          sumaBolsasCal += cantidadBolsasParse;
          
        break;
  
        case "cemento":

          sumaBolsasCemento += cantidadBolsasParse;

        break;
      }
      if (flag == 0 || precioMayorTipo > precioBolsaParse)
      {
          precioMayorTipo = precioBolsaParse;
          nombreTipoMasCaro = tipo;
          flag = 1;
      }

      seguir = confirm ("¿Continuar?");
  
    }while (seguir);
  
    if (acumuladorBolsas >= 10 && acumuladorBolsas <= 29)
    {
      descuento = 15;
    }
    else
    {
      if (acumuladorBolsas >= 30)
      {
        descuento = 25;
      }
      else
      {
        descuento = 0;
      }
    }
    if (sumaBolsasArena > sumaBolsasCal && sumaBolsasArena > sumaBolsasCemento)
    {
      cantidadMayorTipo = sumaBolsasArena;
      nombreMayorTipo = "Arena";
    }
    else
    {
      if (sumaBolsasCal > sumaBolsasArena && sumaBolsasCal > sumaBolsasCemento)
      {
        cantidadMayorTipo = sumaBolsasCal;
        nombreMayorTipo = "Cal";
      } 
      else
      {
        cantidadMayorTipo = sumaBolsasCemento;
        nombreMayorTipo = "Cemento";
      }
  
    }
    importeSinDescuento = acumuladorPrecio * acumuladorBolsas;
    importeConDescuento = importeSinDescuento - importeSinDescuento * descuento / 100;
  
    document.write ("El importe a pagar sin descuento es de: $"+importeSinDescuento+"<br>");
    
    if (descuento != 0)
    {
      document.write ("Se ha aplicado un descuento! El mismo es de: "+descuento+"% Dejando el total a pagar en: $"+importeConDescuento+"<br>");
    }
    document.write ("El tipo de producto con más cantidad de bolsas es: "+nombreMayorTipo+", con una cantidad de: "+cantidadMayorTipo+" bolsas"+
     "<br>El tipo de producto más caro ingresado es: "+nombreTipoMasCaro+", con un valor total de: $"+precioMayorTipo);
}
