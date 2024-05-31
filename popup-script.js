
document.addEventListener('DOMContentLoaded', () => {

const popupOverlay = document.getElementById('popupOverlay');
const playerNameSaved = document.getElementById('playerName');
const finalScore = document.querySelector('score');
const restartButton = document.querySelector('.popup .close[onclick="restartGame()"]');
const quitButton = document.getElementById('quit');
const nextLevelButton = document.getElementById('nextLevel');
// variables for confetti
const confettiCvs = document.getElementById("confettiCanvas");
const confettiCtx = confettiCvs.getContext("2d");
let container, confettiElements = [], clickPosition;
const rand = (min, max) => Math.random() * (max - min) + min; // helper
    // params to play with
const confettiParams = {
    // number of confetti per "explosion"
    number: 300,
    // min and max size for each rectangle
    size: { x: [2, 12], y: [10, 18] },
    // power of explosion
    initSpeed: 25,
    // defines how fast particles go down after blast-off
    gravity: 0.55,
    // how wide is explosion
    drag: 0.18,
    // how slow particles are falling
    terminalVelocity: 5,
    // how fast particles are rotating around themselves
    flipSpeed: 0.017,
};
const confettiColors = [
    { front : '#3B870A', back: '#235106' },
    { front : '#B96300', back: '#6f3b00' },
    { front : '#E23D34', back: '#88251f' },
    { front : '#CD3168', back: '#7b1d3e' },
    { front : '#664E8B', back: '#3d2f53' },
    { front : '#394F78', back: '#222f48' },
    { front : '#008A8A', back: '#005353' },
];

//retrieve player name from local storage
const playerName = localStorage.getItem("name") || "Name";

setupCanvas();
updateConfetti();

function openPopup() {
    popupOverlay.style.display = 'flex';
    playerNameSaved.textContent = playerName;
    finalScore.textContent = `${score} PUNTOS`;
    addConfetti();
}

//trigger popup to open - temporary:to see and work on popup 
setTimeout(openPopup, 5000);

// ------ WORK IN PROGRESS ------ 
// viene de finalización del temporizador
function endGame() {
    popupOverlay.style.display = 'block';
    finalScore.textContent = `${score} PUNTOS`;
}

// ----- WORK IN PROGRESS -----
function restartGame(){
    popupOverlay.style.display = 'none';
    score = 0;
    time = 0;
    //restart();
}

// ----- CONFETTI ----------
// confetti constructor
function Conf () {
    this.randomModifier = rand(-1, 1);
    this.colorPair = confettiColors[Math.floor(rand(0, confettiColors.length))];
    this.dimensions = {
        x: rand(confettiParams.size.x[0], confettiParams.size.x[1]),
        y: rand(confettiParams.size.y[0], confettiParams.size.y[1]),
    }
    this.position = {
        x: clickPosition[0],
        y: clickPosition[1]
    };
    this.rotation = rand(0, 2* Math.PI);
    this.scale = { x: 1, y: 1 };
    this.velocity = {
        x: rand(-confettiParams.initSpeed, confettiParams.initSpeed) * 0.4,
        y: rand(-confettiParams.initSpeed, confettiParams.initSpeed)
    };
    this.flipSpeed = rand(0.2, 1.5) * confettiParams.flipspeed;

    if (this.position.y <= container.h) {
        this.velocity.y = -Math.abs(this.velocity.y);
    }

    this.terminalVelocity = rand(1, 1.5) * confettiParams.terminalVelocity;

    this.update = function () {
        this.velocity.x *= 0.98;
        this.position.x += this.velocity.x;
        this.velocity.y += (this.randomModifier * confettiParams.drag);
        this.velocity.y = Math.min(this.velocity.y, this.terminalVelocity);
        this.position.y += this.velocity.y;
        this.scale.y = Math.cos((this.position.y + this.randomModifier) * this.flipSpeed);
        this.color = this.scale.y > 0 ? this.colorPair.front : this.colorPair.back;
    }
}

function updateConfetti () {
    confettiCtx.clearRect(0, 0, container.w, container.h);
    confettiElements.forEach((c) => {
        c.update();
        confettiCtx.translate(c.position.x, c.position.y);
        confettiCtx.rotate(c.rotation);
        const width = (c.dimensions.x * c.scale.x);
        const height = (c.dimensions.y * c.scale.y);
        confettiCtx.fillStyle = c.color;
        confettiCtx.fillRect (-0.5 * width, -0.5 * height, width, height);
        confettiCtx.setTransform(1, 0, 0, 1, 0, 0)
    });
    confettiElements.forEach((c, idx) => {
        if (c.position.y > container.h ||
            c.position.x < -0.5 * container.x ||
            c.position.x > 1.5 * container.x) {
                confettiElements.splice(idx, 1)
            }
    });
    window.requestAnimationFrame(updateConfetti);
}

function setupCanvas() {
    container = {
        w: confettiCvs.clientWidth,
        h: confettiCvs.clientHeight
    };
    confettiCvs.width = container.w;
    confettiColors.height = container.h;
}

function addConfetti(e) {
    const canvasBox = confettiCvs.getBoundingClientRect();
    if (e) {
        clickPosition = [
            e.clientX - canvasBox.left,
            e.clientY - canvasBox.top
        ];
    } else {
        clickPosition = [
            canvasBox.width * Math.random(),
            canvasBox.height * Math.random()
        ];
    }
    for (let i = 0; i < confettiParams.number; i++) {
        confettiElements.push(new Conf())
    }
}

function hideConfetti() {
    confettiElements = [];
    window.cancelAnimationFrame(updateConfetti)
}

confettiLoop();
function confettiLoop() {
    addConfetti();
    setTimeout(confettiLoop, 700 + Math.random() * 1700);
}


//Event listeners
restartButton.addEventListener('click', restartGame);
quitButton.addEventListener('click', () => window.location.href = 'index.html');
nextLevelButton.addEventListener('click', () => alert('Next level feature coming soon!'));
  //const timerId = setInterval(countdown, 1000);
window.addEventListener('resize', () => {
    setupCanvas();
    hideConfetti();
});

});