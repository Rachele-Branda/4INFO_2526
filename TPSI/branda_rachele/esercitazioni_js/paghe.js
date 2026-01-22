let pulsanteTotale=false;
let pulsanteMedia=false;
function add(){
    let dipartimento = document.getElementById("dipartimento").value;
    let cognome = document.getElementById("cognome").value;
    let nome = document.getElementById("nome").value;
    let mese = document.getElementById("mese").value;
    let importo = document.getElementById("importo").value;
    if (dipartimento=="" || cognome=="" || nome=="" || mese=="" || importo=="" ){
         alert("compila tutti i campi");
         return;
    }
    let tabella = document.getElementById("paghe");
    let riga = document.createElement("tr");
    let cella1 = document.createElement("td");
    let cella2 = document.createElement("td");
    let cella3 = document.createElement("td");
    let cella4 = document.createElement("td");
    let cella5 = document.createElement("td");
    cella1.innerText= dipartimento;
    cella2.innerText = cognome;
    cella3.innerText = nome;
    cella4.innerText = mese;
    cella5.innerText = importo+"€";
    riga.append(cella1,cella2,cella3,cella4,cella5);
    tabella.append(riga);


}
function totale(){
    let righe = document.getElementById("paghe").rows;
    let numeroRighe = righe.length;
    if (numeroRighe<4){
        return;
    }
    let somma = 0;
    for (let i = 2; i < righe.length; i++) {
       somma += parseFloat(righe[i].cells[4].innerText);
    }
    
    if (pulsanteTotale == false){
        pulsanteTotale=true;
        let tabella = document.getElementById("risultati");
        let riga = document.createElement("tr");
        let cella1 = document.createElement("td");
        let cella2 = document.createElement("td");
        cella1.innerText = "TOTALE";
        cella2.innerText = somma+"€";
        riga.append(cella1,cella2);
        tabella.append(riga);
        tabella.classList.add("bordo");

    }
    else{
        let righe = document.getElementById("risultati").rows;
        righe[0].cells[1].innerText=somma+"€";
    }


}

function media(){
    let righe = document.getElementById("paghe").rows;
    let numeroRighe = righe.length;
    if (numeroRighe < 4) {
      return;
    }
    let somma = 0;
    for (let i = 2; i < righe.length; i++) {
      somma += parseFloat(righe[i].cells[4].innerText);
    }
    
    m=somma/(numeroRighe-2);
   
    
    if (pulsanteMedia == false) {
      pulsanteMedia = true;
      let tabella = document.getElementById("tabellaMedia");
      let riga = document.createElement("tr");
      let cella1 = document.createElement("td");
      let cella2 = document.createElement("td");
      let cella3 = document.createElement("td");
      cella1.innerText = "MEDIA";
      cella2.innerText = m+"€";
      cella3.innerText = "";
      riga.append(cella3,cella1,cella2);
      tabella.append(riga);
      tabella.classList.add("bordo");
    }
    else{
        let righe = document.getElementById("tabellaMedia").rows;
        righe[0].cells[1].innerText = m + "€";

    }
}

