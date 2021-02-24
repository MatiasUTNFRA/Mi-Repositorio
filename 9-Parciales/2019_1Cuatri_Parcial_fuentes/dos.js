function mostrar()
{
  let nombre1;
  let nombre2;
  let peso1;
  let peso1Parse;
  let peso2;
  let peso2Parse;
  let sumapeso;
  let promediopeso;

  nombre1 = prompt("Ingresar su nombre");
  peso1 = prompt("Ingresar su peso");
  nombre2 = prompt("Ingresar su nombre");
  peso2 = prompt("Ingresar su peso");

  peso1Parse = parseInt(peso1);
  peso2Parse = parseInt(peso2);

  sumapeso = peso1Parse + peso2Parse;
  promediopeso = sumapeso / 2;

  alert("Ustedes se llaman "+nombre1+" y "+nombre2+", pesan "+peso1Parse+"kg y "+peso2Parse+"kg respectivamente. La suma entre los dos pesos es de "+sumapeso+"kg, y el promedio es de "+promediopeso+"kg");


}
