// Puedo crear la variable y no darle valor todavía.
let a;

// Va a dar "undefined":
console.log(typeof a, a);

a = 20;

// "If" es la condición:
if (a > 20) {
  // Esto es lo que hace si es "true":
  console.log("Es mayor.");
  // "Else if" es otra condición:
} else if (a < 20) {
  console.log("Es menor.");
  // "Else" solo es si los "if" y "else if" dieron "false":
} else {
  console.log("Es igual.");
}

// Los "if" pueden tener solo "if" y no tener "else", pueden tener muchos "else if", pueden no tener "else", pero sí muchos "else if", etc.
