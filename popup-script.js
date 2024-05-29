document.addEventListener('DOMContentLoaded', function() {
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopup = document.getElementsByClassName('close');
    //funciton to open popup
    function openPopup() {
        popupOverlay.style.display = 'block';
    }
    //function to close popup
    function closePopupFunc() {
        popupOverlay.style.display = 'none';
    }

    //Event listeners
    //trigger popup to open
    setTimeout(openPopup, 5000);

    //close popup when button is clicked
    closePopup.addEventListener('click', closePopupFunc);

})