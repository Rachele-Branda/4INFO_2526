/**
 * Funzione che analizza un oggetto e stampa i dettagli dei suoi attributi.
 * @param {Object} obj - L'oggetto da analizzare.
 */
const analizzaOggetto = (obj) => {
  // Usiamo un ciclo for...in per iterare su tutte le proprietà dell'oggetto
  for (let chiave in obj) {
    let valore = obj[chiave];
    let tipo = typeof valore;

    // Gestione specifica per le stringhe: stampa in minuscolo
    if (tipo === "string") {
      valore = valore.toLowerCase();
    }

    console.log(`Attributo: ${chiave} | Tipo: ${tipo} | Valore: ${valore}`);
  }
};

// --- MAIN ---
console.log("--- Verifica 1: Utente ---");
const utente = {
  nome: "MARIO",
  cognome: "Rossi",
  eta: 25,
  isStudente: true,
  codice: 12345,
};
analizzaOggetto(utente);

console.log("\n--- Verifica 2: Prodotto ---");
const prodotto = {
  MARCA: "APPLE",
  modello: "iPhone",
  prezzo: 999.99,
  disponibile: false,
  id: "PROD-001",
};
analizzaOggetto(prodotto);
