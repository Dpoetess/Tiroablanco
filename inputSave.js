const startGameButton = document.getElementById("buttonstart")
const input = document.getElementById("name")
const playerName = document.getElementById("playerName")

startGameButton.addEventListener("click", startGame)

function saveName (){
    localStorage.setItem("name", input.value);
    console.log("name")
}

function openGame() {
    window.location.assign("juego.html")
} 

function startGame () {    
    saveName()
    openGame()
}

function showName () {
    playerName.innerHTML = localStorage.getItem("name");
}