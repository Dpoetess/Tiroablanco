//EXPORTAR de los ficheros correspondientes e IMPORTAR las funciones de sonido, hitDuck, temporizador
import { hitDuck, playCuac, playShoot } from "./match-position-function.js";
import { startTimer, againTimer } from "./time.js";

const shootButton = document.getElementById("shoot-button");
shootButton.addEventListener("click", shootButton);

function shootButton () {
    hitDuck();

    //Start timer only one time
    shootButton.addEventListener("click", startTimer, {once:true});
    startTimer();
    againTimer();

    //Add function playCuac when assert
    shootButton.addEventListener("click", playCuac);        
    playCuac ();

    //Add function playShoot for Sound
    shootButton.addEventListener("click", playShoot);        
    playShoot ();

}  

    //INSERTAR aqui las funciones y comentar todos event Listeners en los ficheros correspondientes
    //comentar las lineas de HTML con todas las funciones excepto ese fichero



