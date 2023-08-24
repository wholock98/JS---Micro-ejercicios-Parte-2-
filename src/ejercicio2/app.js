const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

function calcularLetraDNI(numero) {
  if (!isNaN(numero) && numero >= 0 && numero <= 99999999) {
    const resto = numero % 23;

    return letras[resto];
  } else {
    alert("El número introducido no es correcto.");
    return "";
  }
}

while (true) {
  const numero = prompt("Introduce el número del DNI: ");

  const letra = calcularLetraDNI(numero);

  if (letra) {
    alert("La letra del DNI es " + letra + ".");
  }

  if (numero === "cancelar") {
    break;
  }
}
