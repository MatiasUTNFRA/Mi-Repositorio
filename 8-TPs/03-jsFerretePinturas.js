/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let gradosF;
    let gradosfParse;
    let conversion;

    gradosF = document.getElementById("txtIdTemperatura").value;

    gradosfParse = parseFloat(gradosF);

    conversion = (gradosfParse - 32) / 1.8;

    alert(gradosfParse+" grados Fahernheit son "+conversion.toFixed(2)+" grados Centígrados");

}

function CentigradosFahrenheit () 
{
    let gradosC;
    let gradoscParse;
    let conversion;

    gradosC = document.getElementById("txtIdTemperatura").value;

    gradoscParse = parseFloat(gradosC);

    conversion = gradoscParse * 1.8 + 32;

    alert(gradoscParse+" grados Centígrados son "+conversion.toFixed(2)+" grados Fahrenheit");
}
