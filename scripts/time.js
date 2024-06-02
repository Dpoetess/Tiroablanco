//SCRIPT PARA TEMPORIZADOR DEL JUEGO

Button.addEventListener("click", startTimer, {once: true}); 
var time = 60;
var interval;

function startTimer() {
    interval = setInterval(againTimer, 1000);
}
function restartTimer() {
    clearIntervarl(interval);
    time = 60;
    againTimer();
}
function againTimer() {
    let timeText;
    time = time <= 0 ? 60 : time;
    time--;
    timeText = time
    document.getElementById("time").innerHTML = timeText;
    if (time == 0) {
        clearInterval(interval); // stopTimer
    } 
}

//export {startTimer};

