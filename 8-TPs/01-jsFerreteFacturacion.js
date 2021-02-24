/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1;
    let precio1Parse;
    let precio2;
    let precio2Parse;
    let precio3;
    let precio3Parse;
    let resultado;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1Parse = parseFloat(precio1);
    precio2Parse = parseFloat(precio2);
    precio3Parse = parseFloat(precio3);

    resultado = precio1Parse + precio2Parse + precio3Parse;

    alert("La suma final es de "+resultado);
    
}   


function Promedio () 
{
    let precio1;
    let precio1Parse;
    let precio2;
    let precio2Parse;
    let precio3;
    let precio3Parse;
    let resultado;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1Parse = parseFloat(precio1);
    precio2Parse = parseFloat(precio2);
    precio3Parse = parseFloat(precio3);

    resultado = (precio1Parse + precio2Parse + precio3Parse) / 3;

    alert("El promedio es de "+resultado.toFixed(2));
}
function PrecioFinal () 
{
    let precio1;
    let precio1Parse;
    let precio2;
    let precio2Parse;
    let precio3;
    let precio3Parse;
    let suma;
    let aumentoiva;
    let resultado;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1Parse = parseFloat(precio1);
    precio2Parse = parseFloat(precio2);
    precio3Parse = parseFloat(precio3);

    suma = precio1Parse + precio2Parse + precio3Parse;

    aumentoiva = suma * 0.21;

    resultado = suma + aumentoiva;

    alert("El valor mas iva es de "+resultado.toFixed(2));
}