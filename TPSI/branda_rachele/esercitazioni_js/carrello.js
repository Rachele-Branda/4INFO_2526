function generaPitagorica() {
  let colonne = document.getElementById("colonne").value;
  let tabella = document.getElementById("pitagorica");
  if (colonne < 4 || colonne > 12) {
    alert("Inserisci un numero valido 4-12");
    return;
  }

  for (let r = 0; r <= colonne; r++) {
    let riga = document.createElement("tr");
    tabella.append(riga);
    for (let c = 0; c <= colonne; c++) {
      let cella = document.createElement("td");
      if (r != 0 || c != 0) {
        cella.innerText = r * c;
        if (r == 0) {
          cella.innerText = c;
          cella.classList.add("header");
        }
        if (c == 0) {
          cella.innerText = r;
          cella.classList.add("header");
        }
      }
      riga.append(cella);
    }
  }
}

function calcolaMultipliDivisori(tipo) {
  let numero = document.getElementById("numero").value;
  let tabella = document.getElementById("pitagorica");
  let righe = tabella.children;

  if (numero <= 0) {
    alert("Inserisci un numero positivo!!");
    return;
  }

  for (let r = 1; r < righe.length; r++) {
    let riga = righe[r];
    let celle = riga.children;
    for (let c = 1; c < celle.length; c++) {
      let cella = celle[c];
      let cellaValue = Number(cella.innerText) || 0;
      if (tipo) {
        if (cellaValue % numero == 0) cella.classList.add("multiplo");
      } else {
        if (numero % cellaValue == 0) cella.classList.add("divisore");
      }
    }
  }
}

// assegna id all'elemento
function assegnaId(elemento, id) {
  elemento.id = id;
}

function assegnaUid(elemento) {
  elemento.id = Date.now();
}

// prende gli elementi in base all'id
function getById(idAssegnato) {
  return document.getElementById(idAssegnato);
}

function getTable() {
  return getById("carrello");
}

function getTrs() {
  let tabella = getTable();
  return tabella.querySelectorAll("tr");
}

// prende l'elemento con id quantity
function getQuantInput() {
  return getById("quantity");
}

// prende l'elemento con id price
function getPriceInput() {
  return getById("price");
}

// crea un elemento
function crea(elemento) {
  return document.createElement(elemento);
}

// crea un td
function creaTd() {
  return crea("td");
}

// assegna un testo ad un elemento
function assegnaTesto(elemento, input) {
  elemento.innerText = input;
}

// converte una stringa in un intero
function intConv(stringa) {
  return parseFloat(stringa);
}

// calcola la quantità di input
function qtyInput() {
  return intConv(getQuantInput().value);
}

// calcola il prezzo unitario di input
function prezzoUnitarioInput() {
  return intConv(getPriceInput().value);
}

// calcola la quantità attuale
function qtyNow(quantity) {
  return intConv(quantity.value);
}

// calcola il prezzo unitario attuale
function prezzoUnitarioNow(prezzoUnitario) {
  return intConv(prezzoUnitario.innerText);
}

// calcola l'importo
function calcolaImporto(importoTd, prezzoUnitario, quantità) {
  importoTd.innerText = prezzoUnitario * quantità;
}

// aggiorna l'importo
function updateImporto(quantità, id) {
  let row = getById(id);
  let tds = row.querySelectorAll("td");
  let importoTd = tds[3];
  let prezzoUnitarioTd = tds[2];
  calcolaImporto(
    importoTd,
    prezzoUnitarioNow(prezzoUnitarioTd),
    qtyNow(quantità)
  );
}

function show(lista, classe) {
  for (let i = 0; i < 3; i++) lista[0].classList.remove(classe);
}

function isDesplayed(elemento, classe) {
  if (elemento.length > 0) show(elemento, classe);
}

// aggiunge prodotto al carrello
function addProdotto() {
  let prodInput = getById("product");
  let quantInput = getQuantInput();
  let priceInput = getPriceInput();
  let listaTr = getTrs();

  if (quantInput.value > 0) {
    let articolo = crea("tr");
    let product = creaTd();
    let quantityTd = creaTd();
    let quantity = crea("input");
    let priceUnitario = creaTd();
    let importoTd = creaTd();
    let rimuovi = crea("span");

    assegnaUid(articolo);
    assegnaId(quantity, articolo.id);
    assegnaId(rimuovi, articolo.id);

    assegnaTesto(product, prodInput.value);
    quantity.value = quantInput.value;
    assegnaTesto(priceUnitario, priceInput.value);
    calcolaImporto(
      importoTd,
      intConv(getPriceInput().value),
      intConv(getQuantInput().value)
    ); //prezzoUnitarioInput(), qtyInput()
    assegnaTesto(rimuovi, "remove_shopping_cart");

    priceUnitario.classList.add("euro");
    importoTd.classList.add("importo", "euro");
    rimuovi.classList.add("material-icons", "icon-remove");

    quantity.addEventListener("change", () => {
      updateImporto(quantity, quantity.id);
      addUpdateSomma();
    });

    rimuovi.addEventListener("click", () => {
      remove(rimuovi.id);
      addUpdateSomma();
    });

    quantityTd.append(quantity);
    articolo.append(product, quantityTd, priceUnitario, importoTd, rimuovi);
    listaTr[listaTr.length - 3].after(articolo);
  } else alert("La quantità non può essere minore di 1");
}

function addUpdateSomma() {
  let hiddenClass = "hidden";
  let hiddens = document.getElementsByClassName(hiddenClass);
  let totale = getById("totale");
  let listaTr = getTrs();
  let sum = 0;

  for (i = 2; i < listaTr.length - 2; i++) {
    let tds = listaTr[i].querySelectorAll("td");
    sum += prezzoUnitarioNow(tds[3]); // utilizzata la stessa funzione per comodità
  }

  totale.innerText = Math.round(sum * 100) / 100;

  isDesplayed(hiddens, hiddenClass);
}

function remove(id) {
  let row = getById(id);
  row.remove();
}
