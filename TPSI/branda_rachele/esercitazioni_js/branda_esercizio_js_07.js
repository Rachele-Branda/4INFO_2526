function salva() {
    let cognome = document.getElementById('cognome').value;
    let nome = document.getElementById('nome').value;
    let indirizzo = document.getElementById('indirizzo').value;
    let telefono = document.getElementById('telefono').value;
    let tabella = document.getElementById('tabella');
    let riga=document.createElement("tr");
    let cella1=document.createElement("td");
    let cella2 = document.createElement("td");
    let cella3 = document.createElement("td");
    let cella4 = document.createElement("td");
    let cella5 = document.createElement("td");
    cella1.innerText=cognome;
    cella2.innerText = nome;
    cella3.innerText = indirizzo;
    cella4.innerText = telefono;
    let btnRimuovi = document.createElement("button");
    btnRimuovi.innerText = "Rimuovi";
    cella5.append(btnRimuovi);
    btnRimuovi.onclick = function () {
      riga.remove();
    };

    riga.append(cella1);
    riga.append(cella2);
    riga.append(cella3);
    riga.append(cella4);
    riga.append(cella5);
    tabella.append(riga);
    
        document.getElementById('cognome').value = '';
        document.getElementById('nome').value = '';
        document.getElementById('indirizzo').value = '';
        document.getElementById('telefono').value = '';
    } 


function cerca() {
    let cognome = document.getElementById('cognome').value.toLowerCase();
    let nome = document.getElementById('nome').value.toLowerCase();
    let indirizzo = document.getElementById('indirizzo').value.toLowerCase();
    let telefono = document.getElementById('telefono').value.toLowerCase();
    let tabella = document.getElementById("tabella");
    let righe = tabella.rows;
    for (let i = 0; i < righe.length; i++) {
        let cells = righe[i].cells;
        let match = true;
        if (cognome && !cells[0].innerText.toLowerCase().includes(cognome)) match = false;
        if (nome && !cells[1].innerText.toLowerCase().includes(nome)) match = false;
        if (indirizzo && !cells[2].innerText.toLowerCase().includes(indirizzo)) match = false;
        if (telefono && !cells[3].innerText.toLowerCase().includes(telefono)) match = false;
        righe[i].style.display = match ? '' : 'none';
    }
}

function salva1() {
  let cognome = document.getElementById("cognome").value;
  let nome = document.getElementById("nome").value;
  let indirizzo = document.getElementById("indirizzo").value;
  let telefono = document.getElementById("telefono").value;
  if (cognome && nome && indirizzo && telefono) {
    let tbody = document.getElementById("rubricaBody");
    let riga = tbody.insertRow();
    riga.insertCell(0).innerText = cognome;
    riga.insertCell(1).innerText = nome;
    riga.insertCell(2).innerText = indirizzo;
    riga.insertCell(3).innerText = telefono;
    let cellaRimuovi = riga.insertCell(4);
    let btnRimuovi = document.createElement("button");
    btnRimuovi.innerText = "Rimuovi";
    btnRimuovi.onclick = function () {
      tbody.removeChild(riga);
    };
    cellaRimuovi.appendChild(btnRimuovi);
    document.getElementById("cognome").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("indirizzo").value = "";
    document.getElementById("telefono").value = "";
  } else {
    alert("Inserisci tutti i campi.");
  }
}
