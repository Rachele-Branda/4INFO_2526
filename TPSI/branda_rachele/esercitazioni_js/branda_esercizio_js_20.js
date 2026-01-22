/**
 * Restituisce il maggiore tra tre numeri interi.
 * Utilizza solo l'operatore ternario.
 */
const trovaMaggiore = (a, b, c) => {
  // Logica: Confronto a con b, poi il vincitore con c
  return a > b ? (a > c ? a : c) : b > c ? b : c;
};

// --- MAIN ---
console.log("--- Verifica js_18 ---");
// Invocazione 1
console.log("Test [10, 5, 20]:", trovaMaggiore(10, 5, 20)); // Risultato: 20
// Invocazione 2
console.log("Test [30, 45, 10]:", trovaMaggiore(30, 45, 10)); // Risultato: 45
// Invocazione 3
console.log("Test [50, 15, 25]:", trovaMaggiore(50, 15, 25)); // Risultato: 50
