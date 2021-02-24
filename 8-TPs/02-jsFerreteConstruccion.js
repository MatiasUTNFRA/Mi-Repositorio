/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{  
    let ancho;
    let anchoParse;
    let largo;
    let largoParse;
    let alambre;

    ancho = document.getElementById("txtIdLargo").value;
    largo = document.getElementById("txtIdAncho").value;

    anchoParse = parseFloat(ancho);
    largoParse = parseFloat(largo);

    alambre = (anchoParse + anchoParse + largoParse + largoParse) * 3;

    alert("Deberá emplear "+alambre+"mts de alambre.");

}
function Circulo () 
{   
    let radio;
    let radioParse;
    let alambre;
    const PI = 3.14
    radio = document.getElementById("txtIdRadio").value;

    radioParse = parseFloat(radio);

    alambre = 2 * PI * radioParse * 3;

    alert("Deberá emplear "+alambre+"mts de alambre.");

	
}
function Materiales () 
{
    let ancho;
    let anchoParse;
    let largo;
    let largoParse;
    let area;
    let cemento;
    let cal;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    anchoParse = parseFloat(ancho);
    largoParse = parseFloat(largo);

    area = anchoParse * largoParse

    cemento = area * 2
    cal = area * 3

    alert("Para un contrapiso de "+area+"m2 necesito comprar "+cemento+"bolsas de cemento y "+cal+"bolsas de cal")
	
}