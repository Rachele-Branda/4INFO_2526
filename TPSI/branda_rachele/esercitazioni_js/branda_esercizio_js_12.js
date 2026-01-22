// Realizzazione di un programma in JS che:
// Usando gli Object Literals implementa una classe automobile con 5 attributi e 3 metodi a vostra scelta
// Istanzi 5 oggetti di tipo Automobile e per ciascuno richiamare i 3 metodi

// Definizione del template per la classe Automobile usando Object Literal
function Automobile(marca, modello, colore, anno, prezzo) {
  return {
    // 5 attributi
    marca: marca,
    modello: modello,
    colore: colore,
    anno: anno,
    prezzo: prezzo,

    // 3 metodi
    avvia: function () {
      console.log(
        '${this.marca} ${this.modello} del ${this.anno} si sta avviando...'
      );
      return `Avviata ${this.marca} ${this.modello}`;
    },

    frena: function () {
      console.log(
        '${this.marca} ${this.modello} di colore ${this.colore} sta frenando!'
      );
      return `Frenata ${this.marca} ${this.modello}`;
    },

    mostraInfo: function () {
      const info = `
=== INFORMAZIONI AUTOMOBILE ===
Marca: ${this.marca}
Modello: ${this.modello}
Colore: ${this.colore}
Anno: ${this.anno}
Prezzo: €${this.prezzo.toLocaleString()}
================================`;
      console.log(info);
      return info;
    },
  };
}

// Istanziazione di 5 oggetti di tipo Automobile
console.log("=== CREAZIONE E TEST DI 5 AUTOMOBILE ===\n");

const auto1 = Automobile("Ferrari", "F8 Tributo", "Rosso", 2023, 280000);
const auto2 = Automobile("BMW", "M3", "Blu Metallizzato", 2022, 95000);
const auto3 = Automobile("Tesla", "Model S", "Bianco", 2024, 120000);
const auto4 = Automobile("Audi", "RS6 Avant", "Nero", 2023, 135000);
const auto5 = Automobile("Lamborghini", "Huracán", "Giallo", 2024, 220000);

// Array per tenere traccia di tutte le auto
const automobili = [auto1, auto2, auto3, auto4, auto5];

// Chiamata dei 3 metodi per ciascuna automobile
automobili.forEach((auto, index) => {
  console.log(`\n=== AUTOMOBILE ${index + 1} ===`);
  auto.mostraInfo();
  auto.avvia();
  auto.frena();
  console.log("------------------------");
});

// Funzione aggiuntiva per dimostrare il funzionamento
console.log("\n=== DIMOSTRAZIONE METODI INDIVIDUALI ===");

// Test di metodi individuali
console.log("\n1. Test avviamento singola auto:");
auto1.avvia();

console.log("\n2. Test frenata singola auto:");
auto3.frena();

console.log("\n3. Test informazioni singola auto:");
auto5.mostraInfo();

// Calcolo statistiche
console.log("\n=== STATISTICHE ===");
const prezzi = automobili.map((auto) => auto.prezzo);
const prezzoMedio =
  prezzi.reduce((sum, prezzo) => sum + prezzo, 0) / prezzi.length;
const autoPiuCostosa = automobili.reduce((max, auto) =>
  auto.prezzo > max.prezzo ? auto : max
);

console.log(`Prezzo medio: €${prezzoMedio.toLocaleString()}`);
console.log(
  `Auto più costosa: ${autoPiuCostosa.marca} ${
    autoPiuCostosa.modello
  } - €${autoPiuCostosa.prezzo.toLocaleString()}`
);

console.log("\n=== ESERCIZIO COMPLETATO ===");
