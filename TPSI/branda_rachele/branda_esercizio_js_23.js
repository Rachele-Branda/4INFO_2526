function abbreviaNome(nomeCompleto) {
  const parti = nomeCompleto.trim().split(" ");

  const nome =
    parti[0].charAt(0).toUpperCase() + parti[0].slice(1).toLowerCase();

  const inizialeCognome = parti[1].charAt(0).toUpperCase();

  return `${nome} ${inizialeCognome}.`;
}
