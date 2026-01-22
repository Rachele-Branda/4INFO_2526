// 1. Definizione delle 4 Arrow Functions
const somma = (a, b) => a + b;
const sottrazione = (a, b) => a - b;
const moltiplicazione = (a, b) => a * b;
const divisione = (a, b) => a / b;

// 2. Il "Main" (corpo principale del programma)
console.log("--- Verifica Somma ---");
console.log("Risultato 1:", somma(10, 5)); // Invocazione 1
console.log("Risultato 2:", somma(20, 30)); // Invocazione 2

console.log("--- Verifica Sottrazione ---");
console.log("Risultato 1:", sottrazione(10, 5));
console.log("Risultato 2:", sottrazione(100, 45));

console.log("--- Verifica Moltiplicazione ---");
console.log("Risultato 1:", moltiplicazione(4, 3));
console.log("Risultato 2:", moltiplicazione(7, 8));

console.log("--- Verifica Divisione ---");
console.log("Risultato 1:", divisione(20, 4));
console.log("Risultato 2:", divisione(10, 2));
