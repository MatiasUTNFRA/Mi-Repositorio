function mostrar()
{
    var planeta;

    planeta = prompt ("Ingresar un planeta de nuestro Sistema Solar");

    switch (planeta)
    {
        case "mercurio":
        case "venus":   
            alert ("Acá hace más calor");
        break;
        case "tierra":
            alert ("Acá vivimos");
        break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "neptuno":
        case "urano":    
        case "pluton":
            alert ("Acá hace más frío");
        break;      
        default:
            alert ("Este no es un planeta válido");                               
    }
}
