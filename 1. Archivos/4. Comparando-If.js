// Acá inicializamos, hay que usar el "let":
let a = "a";
let b = "b";

if (a < b) {
  console.log(`${a} es menor a ${b}`);
} else if (a > b) {
  console.log(`${a} es mayor a ${b}`);
} else {
  console.log(`${a} es igual a ${b}`);
}

// Acá reasignamos, ya no necesitamos poner el "let" de nuevo.
a = 9;
b = 3;

if (a < b) {
  console.log(`${a} es menor a ${b}`);
} else if (a > b) {
  console.log(`${a} es mayor a ${b}`);
} else {
  console.log(`${a} es igual a ${b}`);
}
