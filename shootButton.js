//EXPORTAR de los ficheros correspondientes e IMPORTAR las funciones de sonido, hitDuck, temporizador
import hitDuck from "match-position-function";

import { hitDuck } from "../match-position-function.js";
import { timer } from "../time.js";
import { playCuac } from "../match-position-function.js";
import { playShoot } from "../match-position-function.js";

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

    //INSERTAR aqui las funciones y comentar todos event Listeners en los ficheros correspondientes
    //comentar las lineas de HTML con todas las funciones excepto ese fichero



