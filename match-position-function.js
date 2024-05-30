console.log("hola");

const shootButton = document.getElementById("shoot-button")

shootButton.addEventListener("click", hitDuck)

function findCenter (element) {
    const rect = element.getBoundingClientRect(); 
    const centerX = Math.round(rect.left + rect.width / 2); 
    return { centerX };  
}

function hitDuck () {
    console.log("check")
    const duck = document.getElementById("duck");
    const target = document.getElementById("target");
    const offset = 20;

    const duckCenter = findCenter(duck); 
    const targetCenter = findCenter(target);

    /* function updatePosition() {
        const duckCenter = findCenter(duck); 
        const targetCenter = findCenter(target);
    
        requestAnimationFrame(updatePosition);
    }
    updatePosition();
 */

        if (duckCenter === targetCenter) {
            console.log("shooted")
        }
}

//hitDuck()

 //X position 

    /* let targetX = targetRect.left.toFixed(0) + targetRect.width / 2;
    let duckX = duckRect.left.toFixed(0);
    
    // match positions
    if (duckX === targetX) {
        console.log("SHOOTED")
    }
 */

//Matching area bigger
/*function getElementCenter(element) {
    const rect = element.getBoundingClientRect(); ++
    const centerX = rect.left + rect.width / 2; ++
    const centerY = rect.top + rect.height / 2;  --
    return { centerX, centerY };  --
}

function matchCenters() {
    const animatedElement = document.getElementById('animatedElement'); ++
    const targetElement = document.getElementById('targetElement'); ++
    const offset = 10; // Offset to increase the matching area ++

    function updatePosition() {
        const animatedCenter = getElementCenter(animatedElement); 

        // Update the target element position to match the center of the animated element
        targetElement.style.left = `${animatedCenter.centerX - targetElement.offsetWidth / 2 + offset}px`;
        targetElement.style.top = `${animatedCenter.centerY - targetElement.offsetHeight / 2 + offset}px`;

        requestAnimationFrame(updatePosition);
    }

    updatePosition();
}

// Start matching centers
matchCenters();
 */



