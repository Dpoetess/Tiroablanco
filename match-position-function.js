console.log("hola");

const shootButton = document.getElementById("shoot-button");
shootButton.addEventListener("click", hitDuck);


//Count the score  

let score = 0;
function addScore () {
    const scoreArea = document.getElementById("score");
    score = score + 5;
    scoreArea.innerHTML = `PUNTOS: <br> ${score}`;
    console.log(score);
}

function findCenter (element) {
    const rect = element.getBoundingClientRect(); 
    const centerX = Math.round(rect.left + rect.width / 2); 
    return centerX;  
}

//SHOOT the duck

function hitDuck () {
    console.log("check")

    let duckDiv = document.getElementById('ducks').getElementsByTagName('div');
    const target = document.getElementById("target");
    
    for (let i = 0; i< duckDiv.length; i++) {
        
        const duck = duckDiv[i];
        const duckImg = duck.getElementsByTagName('img')[0];
        const duckCenter = findCenter(duck); 
        const targetCenter = findCenter(target);
        const pointA = targetCenter - 20;
        const pointB = targetCenter + 20;
        console.log(duckImg.src)

        if (duckCenter > pointA && duckCenter < pointB ) {
            console.log("shooted")

            if (duckImg.src != "http://127.0.0.1:5504/Source-files/SVG/red-duck.svg") {
                //Sum the score
                addScore();
            }
            
            //Change the color of the shooted duck
            duckImg.src = "Source-files/SVG/red-duck.svg";

            }
    }
} 



/* //Add function playCuac 
shootButton.addEventListener("click", playCuac);        
function playCuac () {
    const cuac = document.getElementById("sounDuck"); // audio de cuac en html con id pato
    cuac.play();

    playCuac(sound);     
        }
 */


//RESTART de Isa
/*function restartGame() {
  score = 0;
  time = 0;
  restart();
} */