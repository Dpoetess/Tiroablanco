console.log("hola");

const shootButton = document.getElementById("shoot-button");
shootButton.addEventListener("click", hitDuck);



function findCenter (element) {
    const rect = element.getBoundingClientRect(); 
    const centerX = Math.round(rect.left + rect.width / 2); 
    return centerX;  
}

//Add function playCuac 
shootButton.addEventListener("click", playCuac);        
function playCuac () {
    const cuac = document.getElementById("sounDuck"); // audio de cuac en html con id pato
    cuac.play();

    playCuac(sound);     
        }



 //Add the score function template
let score = 0;
function addScore () {
    const scoreArea = document.getElementById("score");
    score = score + 5;
    scoreArea.innerHTML = `PUNTOS: <br> ${score}`;
    console.log(score);
}
// es que el let score = 0 dentro de la funcion esta reseteando el score?
//AÑADIR mas patos

function hitDuck () {
    console.log("check")
    const duck = document.getElementById("duck");
    const target = document.getElementById("target");
    const yellowDuck = document.getElementById("yellowDuck")

    const duckCenter = findCenter(duck); 
    const targetCenter = findCenter(target);
    
    const pointA = targetCenter - 20;
    const pointB = targetCenter + 20;

    console.log(duckCenter, targetCenter, pointA, pointB)

    if (duckCenter > pointA && duckCenter < pointB) {
        console.log("shooted")

        //Change the color of the shooted duck
        
        yellowDuck.src = "Source-files/SVG/red-duck.svg";
        addScore();

        

    

        }
} 


