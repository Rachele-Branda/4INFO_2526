function aggiungi_studente(){
   let nome = document.getElementById("nome").value;
   let voto = document.getElementById("voto").value;
   let tabella = document.getElementById("tabella");

   let riga = document.createElement("tr");
   let cella = document.createElement("td");
   cella.innerText = nome;
   riga.append(cella);
   
    let cella2 = document.createElement("td");
    cella2.innerText = voto;
    riga.append(cella2);

    tabella.append(riga);
}

function colora(){
    let righe = document.querySelectorAll("tr");
    for (let i = 0; i < righe.length; i++){
        righe[i].style.color = '#fff';
        if (i % 2 == 0){
            righe[i].style.backgroundColor = 'blue';
        }else{
            righe[i].style.backgroundColor = 'red';
        }
    }
}

function grassetto(){
    let righe = document.querySelectorAll("tr");
    for (let i = 0; i < righe.length; i++){

        righe[i].style.fontWeight = 'bold';
    }
}