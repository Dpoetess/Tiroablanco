document.addEventListener('DOMContentLoaded', () => {

const popupOverlay = document.getElementById('popupOverlay');
const playerNameSaved = document.getElementById('playerName');
const finalScore = document.querySelector('score');
const restartButton = document.querySelector('.popup .close[onclick="restartGame()"]');
const quitButton = document.querySelector('.popup .close');
const nextLevelButton = document.querySelector('popup .close:nth-child(3)');

//retrieve player name from local storage
const playerName = localStorage.getItem("name") || "Name";

function openPopup() {
    popupOverlay.style.display = 'flex';
    playerNameSaved.textContent = playerName;
    finalScore.textContent = `${score} PUNTOS`;
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
 // reset puntuación y temporizador
}

//Event listeners
restartButton.addEventListener('click', restartGame);
quitButton.addEventListener('click', () => window.location.href = 'index.html');
nextLevelButton.addEventListener('click', () => alert('Next level feature coming soon!'));
  const timerId = setInterval(countdown, 1000);

});