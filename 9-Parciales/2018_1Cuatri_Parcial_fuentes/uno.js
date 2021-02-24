
function mostrar()
{
    let ancho;
    let largo;
    let anchoParse;
    let largoParse;
    let perimetro;
    
    ancho = prompt("Ingresar el ancho");
    largo = prompt("Ingresar el largo");

    anchoParse = parseInt(ancho);
    largoParse = parseInt(largo);

    perimetro = anchoParse + anchoParse + largoParse + largoParse;

    alert("El perímetro es de "+perimetro);
    
}
