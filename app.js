const mate = require("./mate");

console.log(
  "Bienvenido a calculadora. Primero selecciona dos números y después una operación."
);

const operaciones = {
  "+": mate.suma,
  "-": mate.resta,
  "*": mate.producto,
  "/": mate.division,
  "%": mate.modulo,
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calculadora = () => {
  readline.question("Inserta un número \n", (num1) => {
    readline.question("Ingresa otro número \n", (num2) => {
      let a = parseInt(num1);
      let b = parseInt(num2);
      console.log(`Selecciona una operación`);
      readline.question("(+, -, *, /, %) \n", (seleccion) => {
        try {
          let operacion = operaciones[seleccion];
          let res = operacion(a, b);
          console.log(`${num1} ${seleccion} ${num2} = ${res}`);
        } catch (error) {
          console.log(
            "Error con la operación introducida. ¡Intentalo de nuevo!"
          );
        }
        readline.close();
      });
    });
  });
};

calculadora();
