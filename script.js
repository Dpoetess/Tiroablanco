function getElementPosition() {
    const element = document.getElementById('animatedElement');
    const rect = element.getBoundingClientRect();
    const positionOutput = document.getElementById('positionOutput');

    positionOutput.textContent = `Current position - X: ${rect.left.toFixed(2)}, Y: ${rect.top.toFixed(2)}`;
}

// Optional: to continuously update the position, use setInterval or requestAnimationFrame
function continuouslyUpdatePosition() {
    const element = document.getElementById('animatedElement');
    const positionOutput = document.getElementById('positionOutput');

    function updatePosition() {
        const rect = element.getBoundingClientRect();
        positionOutput.textContent = `Current position - X: ${rect.left.toFixed(2)}, Y: ${rect.top.toFixed(2)}`;
        requestAnimationFrame(updatePosition);
    }

    updatePosition();
}

// Uncomment the following line to start continuously updating the position
//continuouslyUpdatePosition();
