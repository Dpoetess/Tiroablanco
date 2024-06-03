
  
const popupOverlay = document.getElementById('popupOverlay');
const playerNameSaved = document.getElementById('playerName');
const finalScore = document.getElementById('scoreResult');
const restartButton = document.getElementById('restart');
const quitButton = document.getElementById('quit');
const nextLevelButton = document.getElementById('nextLevel');

//retrieve player name from local storage
const playerName = localStorage.getItem("name") || "JUGADOR!";

export function openPopup() {
//retrieve player score from local storage
  const playerScore = localStorage.getItem("score");
  let target = document.getElementById("scope")
  target.style.display = "none";

  popupOverlay.style.display = 'flex';
  playerNameSaved.textContent =`${playerName}!`;
  finalScore.textContent = playerScore;
  resetConfetti();
  initConfetti();
  render();
  playApplause();
} 

function reset () {
  const playerScore = localStorage.getItem("score");
}

function endGame () {
  reset();
  window.location.assign("game.html");
}

function quitGame () {
  reset();
  window.location.assign("index.html");
}

// ------------ confetti ----------------
//-----------Var Inits--------------
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let cx = ctx.canvas.width / 2;
let cy = ctx.canvas.height / 2;

let confetti = [];
const confettiCount = 300;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
  { front: "red", back: "darkred" },
  { front: "green", back: "darkgreen" },
  { front: "blue", back: "darkblue" },
  { front: "yellow", back: "darkyellow" },
  { front: "orange", back: "darkorange" },
  { front: "pink", back: "darkpink" },
  { front: "purple", back: "darkpurple" },
  { front: "turquoise", back: "darkturquoise" }
];

//-----------Functions--------------
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cx = ctx.canvas.width / 2;
  cy = ctx.canvas.height / 2;
};

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function resetConfetti() {
  confetti = [];
}

function initConfetti() {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      color: colors[Math.floor(randomRange(0, colors.length))],
      dimensions: {
        x: randomRange(10, 20),
        y: randomRange(10, 30)
      },

      position: {
        x: randomRange(0, canvas.width),
        y: canvas.height - 1
      },

      rotation: randomRange(0, 2 * Math.PI),
      scale: {
        x: 1,
        y: 1
      },

      velocity: {
        x: randomRange(-25, 25),
        y: randomRange(0, -50)
      }
    });
  }
};

//---------Render-----------
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((confetto, index) => {
    let width = confetto.dimensions.x * confetto.scale.x;
    let height = confetto.dimensions.y * confetto.scale.y;

    // Move canvas to position and rotate
    ctx.translate(confetto.position.x, confetto.position.y);
    ctx.rotate(confetto.rotation);

    // Apply forces to velocity
    confetto.velocity.x -= confetto.velocity.x * drag;
    confetto.velocity.y = Math.min(
      confetto.velocity.y + gravity,
      terminalVelocity
    );
    confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

    // Set position
    confetto.position.x += confetto.velocity.x;
    confetto.position.y += confetto.velocity.y;

    // Delete confetti when out of frame
    if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

    // Loop confetto x position
    if (confetto.position.x > canvas.width) confetto.position.x = 0;
    if (confetto.position.x < 0) confetto.position.x = canvas.width;

    // Spin confetto by scaling y
    confetto.scale.y = Math.cos(confetto.position.y * 0.1);
    ctx.fillStyle =
      confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

    // Draw confetti
    ctx.fillRect(-width / 2, -height / 2, width, height);

    // Reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });

  // Fire off another round of confetti
  if (confetti.length <= 10) initConfetti();

  window.requestAnimationFrame(render);
};

function playApplause () {
  applauseAudio.play().then(() => {
      applauseAudio.muted = false;  // Unmute the audio after it starts playing
  }).catch(error => {
      console.log('Autoplay was prevented:', error);
      // Fallback: Play audio on user interaction
      document.addEventListener('click', (event) => {
        if (!restartButton.contains(event.target) &&
        !quitButton.contains(event.target) &&
        !nextLevelButton.contains(event.target)) {
        applauseAudio.muted = false;
        applauseAudio.play();
    }
      }, { once: true });
  });
}


//Event listeners
document.addEventListener('DOMContentLoaded', () => {

//----------Resize----------
window.addEventListener("resize", function () {
  resizeCanvas();
});

//------------Click------------
window.addEventListener("click", function () {
  initConfetti();
});

restartButton.addEventListener("click", endGame);
quitButton.addEventListener("click", quitGame);
nextLevelButton.addEventListener('click', () => alert('Proximamente!'));


});



