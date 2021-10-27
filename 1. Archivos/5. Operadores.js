//https://www.w3schools.com/js/js_operators.asp

// Podemos incrementar 1:
let num = 5;
num++;
console.log(num);

// Si no voy a usar el num++, tengo que primero hacer esto, como si reasignara el valor:
// Incrementar != sumar.
num = num + 1;
console.log(num);

// Acá es lo mismo:
num--;
console.log(num);

num = num - 1;
console.log(num);

// Podemos usar operaciones de asignación:
//Esto es igual a "num = num + 15".
num += 15;
console.log(num);

num *= 2;
console.log(num);

num -= 4;
console.log(num);

num /= 6;
console.log(num);

// El resto nos da lo que queda sobrando en la división.
num %= 2;
console.log(num);

console.log("El resto entre 9 y 5 es: ", 9 % 5);

// Si queremos sacar "par" o "impar", usamos el 2, pero el resto puede ir con cualquier cosa.

// "**" es igual a "potencia":
// Sería igual a poner num = num ** 3:
num = 3;
num **= 3;
console.log(num);
