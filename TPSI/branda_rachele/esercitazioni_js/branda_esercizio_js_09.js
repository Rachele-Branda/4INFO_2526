let username = prompt("Inserisci il tuo username:");

username === null && alert("Operazione annullata");
username !== null && (username === "Admin" || alert("I don't know you"));

username === "Admin" &&
  ((password = prompt("Enter your password:")),
  password === null && alert("Canceled"),
  password !== null && password !== "Agnell1no" && alert("Wrong password"),
  password === "Agnell1no" && alert("Welcome!"));