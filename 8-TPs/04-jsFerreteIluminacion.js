/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cantidadLamparas;
     var cantLampParse;
     var marca;
     var descuento;
     var precio = 35;
     var precioFinal;
     var precioDescuento;
     var ingBrutos;

     cantidadLamparas = document.getElementById("txtIdCantidad").value;
     cantLampParse = parseInt(cantidadLamparas);
     marca = document.getElementById("Marca").value;

//Metodo alternativo utilizando solo switch
    switch (cantLampParse)
    {
        case 1:
        case 2:
            descuento = 0;
        break;
        case 3:
            switch (marca)
            {
                case "ArgentinaLuz":
                    descuento = 15;
                    break;
                case "FelipeLamparas":
                    descuento = 10;
                    break;
                default:
                    descuento = 5;
            } 
        break;
        case 4:
            switch (marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                break;
                default:
                    descuento = 20;            
            }  
        break;
        case 5:
            switch (marca)
            {
                case "ArgentinaLuz":
                    descuento = 40;
                break;
                default:
                    descuento = 30;    
            }  
        default:
            descuento = 50;         
    }

//Variante utilizando solamente if, else

  /*if (cantLampParse > 5)
{
    descuento = 50;
}
  if (cantLampParse == 5)
{
    if ( marca == "ArgentinaLuz")
    {
        descuento = 40;
    }
    else
    {
        descuento = 30;
    }
}
  if (cantLampParse == 4)
{
    if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
    {
       descuento = 25;    
    }
    else
    {
       descuento = 20;
    }
}

  if (cantLampParse == 3)
{
    if (marca == "ArgentinaLuz")
    {
        descuento = 15;    
    }
    else
    {
        if (marca == "FelipeLamparas")
        {
            descuento = 10;
        }
        else
        {
            descuento = 5;
        }
    }

}
  if (cantLampParse >= 0 && cantLampParse <= 2)
{
    descuento = 0;
}*/
     
// Variante utilizando switch con if, else

    /*switch (cantLampParse)
     {
         case 1:
         case 2:
             descuento = 0;
            break;

         case 3:
            if (marca == "ArgentinaLuz")
            {
                descuento = 15;    
            }
            else
            {
                if (marca == "FelipeLamparas")
                {
                    descuento = 10;
                }
                else
                {
                    descuento = 5;
                }
            }
            break;
         
         case 4:
             if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
             {
                 descuento = 25;
             }
             else
             {
                 descuento = 20;
             }
            break;

         case 5:
             if(marca == "ArgentinaLuz")
             {
                 descuento = 40;    
             }
             else
             {
                 descuento = 30;
             }
            break;

         default:
             descuento = 50;   
     }*/

     precioDescuento = precio - precio * descuento / 100;

     document.getElementById("txtIdprecioDescuento").value = precioDescuento;

     precioFinal = precioDescuento * cantLampParse;

     if (precioFinal > 120)
     {
         ingBrutos = precioFinal * 10 / 100;

         precioFinal = precioFinal + ingBrutos;
         
         alert("Importe a pagar: $"+precioFinal+". Pagó $"+ingBrutos+" de ingresos brutos");
     }
     else
     {
         alert("Total a pagar: $"+precioFinal);
     }
}
