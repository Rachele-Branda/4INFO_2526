const game = document.getElementById("game");
const dino = document.getElementById("dino");
const scoreElement = document.getElementById("score");
const startScreen = document.getElementById("start-screen");

let score = 0;
let gameSpeed = 1.5; // Durata dell'animazione in secondi
let isGameRunning = false;
let gameInterval;
let spawnTimeout;

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    // Rimuove la classe dopo 500ms per poter saltare di nuovo
    setTimeout(() => dino.classList.remove("jump"), 500);
  }
}

function startGame() {
  if (isGameRunning) return;
  isGameRunning = true;
  score = 0;
  startScreen.style.display = "none";
  scoreElement.style.display = "block";

  // Avvia il controllo collisioni
  gameInterval = setInterval(gameLoop, 10);
  // Avvia la generazione ostacoli
  createCactus();
}

function createCactus() {
  if (!isGameRunning) return;

  const obstacle = document.createElement("div");
  obstacle.classList.add("obstacle");

  // Applica l'animazione CSS via codice per controllare la velocità
  obstacle.style.animation = `move ${gameSpeed}s linear`;

  game.appendChild(obstacle);

  // Rimuove l'elemento dal DOM quando l'animazione finisce
  obstacle.addEventListener("animationend", () => {
    obstacle.remove();
  });

  // Calcola il tempo per il prossimo cactus (casuale ma bilanciato)
  let nextSpawn = 1000 + Math.random() * 1000;
  spawnTimeout = setTimeout(createCactus, nextSpawn);
}

function gameLoop() {
  const dinoRect = dino.getBoundingClientRect();
  const obstacles = document.querySelectorAll(".obstacle");

  obstacles.forEach((obstacle) => {
    const obstacleRect = obstacle.getBoundingClientRect();

    // Collisione (ridotta di qualche pixel per essere più permissiva/equa)
    if (
      dinoRect.left < obstacleRect.right - 10 &&
      dinoRect.right > obstacleRect.left + 10 &&
      dinoRect.top < obstacleRect.bottom &&
      dinoRect.bottom > obstacleRect.top + 10
    ) {
      gameOver();
    }
  });

  // Punteggio
  score += 0.1;
  scoreElement.innerHTML = Math.floor(score).toString().padStart(5, "0");

  // Aumenta la velocità ogni 100 punti
  if (Math.floor(score) % 100 === 0 && score > 0.1) {
    gameSpeed = Math.max(0.7, gameSpeed - 0.005);
  }
}

function gameOver() {
  isGameRunning = false;
  clearInterval(gameInterval);
  clearTimeout(spawnTimeout);
  alert("GAME OVER! Punteggio: " + Math.floor(score));
  location.reload(); // Ricarica la pagina per resettare
}

// Input
document.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "ArrowUp") {
    if (!isGameRunning) {
      startGame();
    } else {
      jump();
    }
  }
});
