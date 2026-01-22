
let utente = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 30,
  email: "mario.rossi@example.com",
};

let chiavi = Object.keys(utente);
for (let i = 0; i < chiavi.length; i++) {
  let chiave = chiavi[i];
  console.log(chiave + ": " + utente[chiave]);
}
