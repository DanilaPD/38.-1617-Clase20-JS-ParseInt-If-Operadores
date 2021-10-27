const calorias = 150;
const cal = "150";

if (calorias === cal) {
  console.log(calorias);
} else {
  console.log("¡No son comparables!");
}

if (calorias == cal) {
  console.log(calorias);
} else {
  console.log("¡No son comparables!");
}

const num1 = 155;
const num2 = 155;

// No es lo mismo > que >= porque > siempre va a pretender que sea mayor aunque sea en centésimas.
if (num1 > num2) {
  console.log("Es mayor.");
} else if (num1 >= num2) {
  console.log("Es mayor o igual.");
} else {
  console.log("Bueno, la única opción es que sea menor.");
}
