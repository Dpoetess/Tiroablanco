//SCRIPT PARA TEMPORIZADOR DEL JUEGO
const shootButton = document.getElementById("shoot-button")
shootButton.addEventListener("click", timer);
let time = 60;


//definir y ejecutar los segundos
function timer() {
    let textTime;
    if (time < 0) {
        time = 59;
    }
//mostrar segundos en pantalla
if (time < 10) {
textTime = 60;
} else {
    textTime = time;
}
setInterval(timer, 1000); //ejecutar cada segundo
document.getElementById("time").innerHTML = "Tiempo:" <br> textTime;
}

export {timer};

