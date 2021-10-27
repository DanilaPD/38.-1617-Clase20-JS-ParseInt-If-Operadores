// = Asignación
// == Comparación
// === Comparación estricta

// Comparaciones:

let num = 15;
let numStr = "15";
let num2 = 16;

// El triple es estricto:
if (num === numStr) {
  // Si pongo === es estrictamente igual: tipo y valor.
  console.log(
    `Num es igual a numStr porque ${typeof num} es igual a ${typeof numStr}`
  );
  //Si pongo != es estrictamente distinto.
} else if (num != numStr) {
  console.log(
    `Num es distinto a numStr porque ${typeof num} no es igual a ${typeof numStr}`
  );
} else {
  // Jamás va a entrar:
  console.log(`Che, qué hacés acá.`);

  // El doble solo compara los valores, pero no los tipos:
  if (num == numStr) {
    console.log(`Num es igual a numStr porque ${num} es igual a ${numStr}`);
  } else {
    console.log(
      `Num es distinto a numStr porque ${num} no es igual a ${numStr}`
    );
  }
}
