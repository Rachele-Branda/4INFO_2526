// Definizione dell'oggetto tramite un costruttore (Object Literal con proprietà e metodi)
const automobile = {
  // Proprietà caratteristiche
  persone: 0, // tra 0 e 5
  velocita: 0, // tra 0 e 180
  marcia: 1, // tra 1 e 6
  accesa: false, // on/off

  // 1. Pulsante ON/OFF
  toggleAccensione: function () {
    this.accesa = !this.accesa;
    // Se si spegne, per sicurezza azzeriamo velocità e marcia
    if (!this.accesa) {
      this.velocita = 0;
      this.marcia = 1;
    }
  },

  // 2. Impostare numero persone (solo se fermi)
  setPersone: function (n) {
    if (this.velocita === 0 && n >= 0 && n <= 5) {
      this.persone = n;
    } else {
      return "Errore: impossibile cambiare passeggeri in movimento o numero non valido.";
    }
  },

  // 3. Impostare velocità (max +/- 30km/h di scarto e solo se accesa)
  setVelocita: function (nuovaV) {
    if (!this.accesa) return "Errore: l'auto è spenta!";

    let scarto = Math.abs(nuovaV - this.velocita);
    if (nuovaV >= 0 && nuovaV <= 180 && scarto <= 30) {
      this.velocita = nuovaV;
    } else {
      return "Errore: velocità non valida o variazione superiore a 30km/h.";
    }
  },

  // 4. Aumenta marcia (max 6 e solo se accesa)
  aumentaMarcia: function () {
    if (this.accesa && this.marcia < 6) {
      this.marcia++;
    }
  },

  // 5. Diminuisce marcia (min 1 e solo se accesa)
  diminuisceMarcia: function () {
    if (this.accesa && this.marcia > 1) {
      this.marcia--;
    }
  },

  // Metodo per visualizzare lo stato attuale
  mostraStato: function () {
    return `[STATO] Accesa: ${this.accesa ? "Sì" : "No"} | Passeggeri: ${
      this.persone
    } | Velocità: ${this.velocita} km/h | Marcia: ${this.marcia}`;
  },
};

// --- MAIN (Verifica del funzionamento) ---
console.log("--- Test Iniziale ---");
console.log(automobile.mostraStato());

console.log("\n--- Carico persone e accendo ---");
automobile.setPersone(3);
automobile.toggleAccensione();
console.log(automobile.mostraStato());

console.log("\n--- Cambio marcia e accelero ---");
automobile.aumentaMarcia(); // Marcia 2
automobile.setVelocita(25); // Ok (0 + 25)
console.log(automobile.mostraStato());

console.log("\n--- Test Vincoli (Tentativo errore) ---");
// Tentativo di cambiare persone mentre l'auto si muove
let errorePersone = automobile.setPersone(5);
if (errorePersone) console.log(errorePersone);

// Tentativo di accelerare troppo bruscamente (da 25 a 100)
let erroreVelocita = automobile.setVelocita(100);
if (erroreVelocita) console.log(erroreVelocita);

console.log("\n--- Spegnimento ---");
automobile.toggleAccensione();
console.log(automobile.mostraStato());
