const mate = require("./mate");

console.log(
  "Bienvenido a calculadora. Primero selecciona dos números y después una operación."
);

const operaciones = Object.values(mate);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Inserta un número \n", (num1) => {
  readline.question("Ingresa otro número \n", (num2) => {
    let a = parseInt(num1);
    let b = parseInt(num2);
    console.log(`Selecciona una operación:
    0. Suma
    1. Resta
    2. Multiplicación
    3. División 
    4. Modulo
    `);
    readline.question(
      "Selecciona el número de la operación \n",
      (seleccion) => {
        let operacion = operaciones[seleccion];
        let res = operacion(a, b);
        console.log(`El resultado de la operación ${seleccion} es ${res}`);
        readline.close();
      }
    );
  });
});
