//EXPORTAR de los ficheros correspondientes e IMPORTAR las funciones de sonido, hitDuck, temporizador
import { hitDuck, playCuac, playShoot } from "./match-position-function.js";
import timer from "./time.js";

const shootButton = document.getElementById("shoot-button");
shootButton.addEventListener("click", shootButton);

function shootButton () {
    hitDuck();

    timer();

    //Add function playCuac when assert
    shootButton.addEventListener("click", playCuac);        
    playCuac ();

    //Add function playShoot for Sound
    shootButton.addEventListener("click", playShoot);        
    playShoot ();

}  
