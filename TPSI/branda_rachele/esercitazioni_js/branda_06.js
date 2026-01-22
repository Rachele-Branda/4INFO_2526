function aggiuntalinea() {
  let tabella = document.getElementById("tabella");
  let nome = document.getElementById("nome").value;
  let media = document.getElementById("media").value;
  let riga = document.createElement("tr");
  let cella1 = document.createElement("td");
  let cella2 = document.createElement("td");
  cella1.innerText = nome;
  cella2.innerText = media;
 
  riga.append(cella1);
  riga.append(cella2);
  tabella.append(riga);

  document.getElementById("nome").value="";
  document.getElementById("media").value="";
}

function coloralinee() {
  let linee = document.getElementsByTagName("tr");
  for (let i = 0; i < linee.length; i++) {
    if (i % 2 == 0) {
      linee[i].style.backgroundColor = "blue";
    } else {
      linee[i].style.backgroundColor = "red";
    }
  }
}

function grassetto() {
  let tdcontent = document.getElementsByTagName("td");
  for (let i = 0; i < tdcontent.length; i++) {
    let tdattuale = tdcontent[i];
    tdattuale.classList.add("grassetto");
  }
}

function blu() {
  let tdcontent = document.getElementsByTagName("td");
  for (let i = 0; i < tdcontent.length; i++) {
    let tdattuale = tdcontent[i];
    tdattuale.classList.add("blu");
  }
}

function togglebordo() {
  console.log("bordo");
  let tabella = document.getElementById("tabella");
  tabella.classList.toggle("bordo");
}
