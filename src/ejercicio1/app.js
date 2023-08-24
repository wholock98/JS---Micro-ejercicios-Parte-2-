const username = prompt("Introduce tu nombre de usuario: ");

const age = parseInt(prompt("Introduce tu edad: "));

if (age >= 18) {
  alert("¡Hola " + username + "! Puedes conducir.");
} else {
  alert("¡Hola " + username + "! No puedes conducir.");
}
