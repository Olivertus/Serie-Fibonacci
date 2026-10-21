// Función que genera la serie Fibonacci con la cantidad de números que le pidamos
function generarFibonacci(cantidad) {
  const serie = [0, 1]; // La serie siempre arranca con 0 y 1

  for (let i = 2; i < cantidad; i++) {
    // Cada número nuevo es la suma de los dos anteriores
    serie.push(serie[i - 1] + serie[i - 2]);
  }

  return serie;
}

// Función que imprime el mensaje y la serie en consola
function imprimirFibonacci(cantidad) {
  console.log(`Los primeros ${cantidad} números de la serie Fibonacci son:`);
  console.log(generarFibonacci(cantidad).join(", "));
}

// Llamada: imprimir los 20 primeros números
imprimirFibonacci(20);